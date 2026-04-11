const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.write("Error loading page");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }
        res.end();
    });

});

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});