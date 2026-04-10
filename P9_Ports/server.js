const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Server running on port 5000");
    res.end();
});

server.listen(5000, () => {
    console.log("Server started on port 5000");
});