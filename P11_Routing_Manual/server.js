const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.write("Welcome to Home Page");
    }
    else if (req.url === '/login' && req.method === 'GET') {
        res.write("Login Page");
    }
    else if (req.url === '/data' && req.method === 'POST') {
        res.write("Data Received via POST");
    }
    else {
        res.write("404 Page Not Found");
    }

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});