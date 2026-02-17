const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Use express.static middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Add a simple log for the root path if needed, but the static middleware handles the files
app.get('/', (req, res) => {
    console.log('Root path requested, serving index.html from public directory.')
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});