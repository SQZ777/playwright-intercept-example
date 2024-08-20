const { test, expect } = require('@playwright/test');

test.describe('test with local and no change', () => {
    test('test intercept request for no change', async ({ page }) => {
        await page.route('**/api/data', (route, request) => {
            console.log('Intercepted request:', request.postData());
            const postData = JSON.parse(request.postData());
            expect(postData.location).toBe('Asia/Taipei')
            route.continue();
        });
    
        await page.goto('http://localhost:3000');
        await page.click('#sendRequest');
    
        // 讓時間留給網頁處理請求
        await page.waitForTimeout(1000);
    });
});
