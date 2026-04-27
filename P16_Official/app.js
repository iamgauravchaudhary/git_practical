const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));

let users = [];

// Home
app.get('/', (req, res) => {
    res.send(`
        <h2>Welcome</h2>
        <a href="/register">Register</a><br>
        <a href="/login">Login</a>
    `);
});

// Register Form
app.get('/register', (req, res) => {
    res.send(`
        <h2>Register</h2>
        <form method="POST" action="/register">
            <input name="username" placeholder="Username" required><br><br>
            <input name="password" type="password" placeholder="Password" required><br><br>
            <button>Register</button>
        </form>
    `);
});

// Register User
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hash
    });

    res.send("Registered Successfully <br><a href='/login'>Login Now</a>");
});

// Login Form
app.get('/login', (req, res) => {
    res.send(`
        <h2>Login</h2>
        <form method="POST" action="/login">
            <input name="username" placeholder="Username" required><br><br>
            <input name="password" type="password" required><br><br>
            <button>Login</button>
        </form>
    `);
});

// Login User
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) return res.send("User not found");

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.send("Wrong Password");

    req.session.user = username;

    res.redirect('/dashboard');
});

// Protected Route
app.get('/dashboard', (req, res) => {
    if (!req.session.user) {
        return res.send("Please login first");
    }

    res.send(`
        <h2>Welcome ${req.session.user}</h2>
        <a href="/logout">Logout</a>
    `);
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send("Logged Out");
});

app.listen(3000, () => console.log("Server running on port 3000"));