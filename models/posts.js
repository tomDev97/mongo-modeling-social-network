const mongoose = require('mongoose');
const { LikeSchema } = require('./likes');


const PostSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: [LikeSchema] }
})