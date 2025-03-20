const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.get('/social', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'social.html'));
});

// ✅ Fix: Add routes for Chatbot & Downloader pages
app.get('/projects/chatbot', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'chatbot.html'));
});

app.get('/projects/downloader', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'downloader.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
