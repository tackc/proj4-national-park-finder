const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    commentId: {
        type: String,
        required: [true]
    },
    commentTitle: {
        type: String,
        required: [true]
    },
    commentDescription: {
        type: String,
        required: [true]
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;