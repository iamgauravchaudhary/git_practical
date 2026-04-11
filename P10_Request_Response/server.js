const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);

    res.write("Request received successfully!");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});