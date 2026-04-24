const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET = "mysecretkey";

// Login route
app.post('/login', (req, res) => {
    const { username, role } = req.body;

    const token = jwt.sign({ username, role }, SECRET, { expiresIn: '1h' });

    res.json({ token });
});

// Verify Token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) return res.send("No token");

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch {
        res.send("Invalid token");
    }
}

// Role middleware
function isAdmin(req, res, next) {
    if (req.user.role === "admin") {
        next();
    } else {
        res.send("Access denied: Admin only");
    }
}

// Public route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// Protected Admin route
app.get('/admin', verifyToken, isAdmin, (req, res) => {
    res.send("Welcome Admin " + req.user.username);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});