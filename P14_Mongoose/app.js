const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/collegeDB')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// Create Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Create Model
const Student = mongoose.model('Student', studentSchema);

// Insert Data
const student = new Student({
    name: "Gaurav",
    age: 20,
    course: "CSE"
});

student.save()
    .then(() => console.log("Data inserted"))
    .catch(err => console.log(err));