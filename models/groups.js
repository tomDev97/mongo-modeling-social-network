const mongoose = require('mongoose');
// const User = require('./users');


const GroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userIds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    description: { type: String, required: true }
})

const Group = mongoose.model('group', GroupSchema);

module.exports = {
    Group, GroupSchema
}