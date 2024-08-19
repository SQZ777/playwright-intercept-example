const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// 提供 public 資料夾中的靜態檔案
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received successfully', receivedData: req.body });
});

// 服務 index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
