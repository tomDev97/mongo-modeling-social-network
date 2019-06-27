const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    userIds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})
const Like = mongoose.model('like', LikeSchema);

module.exports = {
    Like, LikeSchema
}