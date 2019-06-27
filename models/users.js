const mongoose = require('mongoose');
const { ProfileSchema } = require('./profiles');


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    dateOfBirth: { type: Date, default: Date.now },
    registedDate: { type: Date, default: Date.now },
    profile: { type: ProfileSchema },
    groupIds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group'
    }

})
const User = mongoose.model('user', UserSchema);

module.exports = {
    User, UserSchema
}