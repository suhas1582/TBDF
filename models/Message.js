const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const messageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 128
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {

        type: Date,
        default: Date.now,
        required: true
    },
    deadline: {
        type: Date,
        default: Date.now,
    },
    type: {
        type: String,
        default: "Lesson",
        required: true
    },
    createdBy: {
        type: ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Message", messageSchema);