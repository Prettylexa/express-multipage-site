const fs = require('fs'); 
const path = require('path');

// Route to serve the blog page
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// API Route to get the blog data
app.get('/api/posts', (req, res) => {
    const postsData = fs.readFileSync(path.join(__dirname, 'data', 'posts.json'));
    const posts = JSON.parse(postsData);
    res.json(posts);
});
