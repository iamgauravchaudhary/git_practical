const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// Fake DB (memory)
let user = {};

// Signup route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    user.username = username;
    user.password = hashedPassword;

    res.send("User registered");
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (username !== user.username) {
        return res.send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        res.send("Login successful");
    } else {
        res.send("Invalid password");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});