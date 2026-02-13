const express = require('express'); // 1. Import Express
const fs = require('fs');
const path = require('path');

const app = express(); // 2. Initialize the app object
const PORT = process.env.PORT || 3000;

// 3. Serve static files (CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// --- Routes from Task 1 ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// --- Routes from Task 2 (The Challenge) ---

// Route to serve the blog page HTML
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// API Route to read the JSON file and send data to the frontend
app.get('/api/posts', (req, res) => {
    try {
        const postsData = fs.readFileSync(path.join(__dirname, 'data', 'posts.json'), 'utf8');
        const posts = JSON.parse(postsData);
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: "Failed to load blog posts" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});