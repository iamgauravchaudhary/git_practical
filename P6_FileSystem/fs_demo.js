const fs = require('fs');

// 1. Create & Write file
fs.writeFileSync('demo.txt', 'Hello Gaurav');

// 2. Read file
const data = fs.readFileSync('demo.txt', 'utf-8');
console.log("File Content:", data);

// 3. Append data
fs.appendFileSync('demo.txt', '\nThis is appended text');

// 4. Delete file (optional)
// fs.unlinkSync('demo.txt');