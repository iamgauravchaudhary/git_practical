const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello Gaurav, Server is running!");
    res.end();
});

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});