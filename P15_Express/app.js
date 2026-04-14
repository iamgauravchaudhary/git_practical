const express = require('express');
const app = express();

// Middleware (logging)
app.use((req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next(); // move to next
});

// Route
app.get('/', (req, res) => {
    res.send("Welcome to Express App");
});

app.get('/about', (req, res) => {
    res.send("About Page");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});