const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

// Login route
app.post('/login', (req, res) => {
    const { username } = req.body;

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
});

// Middleware to verify token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.send("Access denied");

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    } catch (err) {
        res.send("Invalid token");
    }
}

// Protected route
app.get('/dashboard', verifyToken, (req, res) => {
    res.send("Welcome " + req.user.username);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});