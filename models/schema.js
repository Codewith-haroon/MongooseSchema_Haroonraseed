const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Course',
        },
    ],
});
const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    durationWeeks: {
        type: Number,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
});

module.exports = {
    Student: mongoose.model('Student', studentSchema),
    Course: mongoose.model('Course', courseSchema),
};