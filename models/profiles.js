const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    university: { type: [String], required: true },
    major: { type: [String], required: true },
    social: {
        facebook: { type: String },
        twitter: { type: String }
    },
    desc: { type: String }
})


const Profile = mongoose.model('profile', ProfileSchema);

module.exports = {
    Profile, ProfileSchema
}