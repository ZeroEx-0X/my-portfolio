const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // Static files (CSS, JS)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.get('/social', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'social.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
