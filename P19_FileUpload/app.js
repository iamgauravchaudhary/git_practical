const express = require('express');
const multer = require('multer');

const app = express();

// Storage settings
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h2>Upload File</h2>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="myfile" />
            <button type="submit">Upload</button>
        </form>
    `);
});

// Upload route
app.post('/upload', upload.single('myfile'), (req, res) => {
    res.send("File uploaded successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});