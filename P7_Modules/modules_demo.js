const os = require('os');
const path = require('path');
const url = require('url');

// OS Module
console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());

// Path Module
const filePath = path.join('folder', 'file.txt');
console.log("Joined Path:", filePath);

// URL Module
const myUrl = new URL('https://example.com:8080/path?name=gaurav');

console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Query Param:", myUrl.searchParams.get('name'));