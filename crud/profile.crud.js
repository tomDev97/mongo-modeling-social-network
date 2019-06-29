const mongoose = require('mongoose');
const { User, UserSchema } = require('../models/users');
const { Profile, ProfileSchema } = require('../models/profiles');
const { Comment } = require('../models/comments');
const { Group } = require('../models/groups');
const { Post } = require('../models/posts');
const { Like } = require('../models/likes');

mongoose.connect('mongodb://localhost/social-network', { useNewUrlParser: true })
    .then(() => console.log('connected to mongoDB'))
    .catch(console.log)

const CreateProfile = async (userId, university, major, social, desc) => {
    try {
        let userFinded = await User.findOne({ _id: userId });
        if (!userFinded) return console.log(`user not found`);
        if (userFinded.profile) return console.log(`profile exits`);
        const newProfile = new Profile({
            university, major, social, desc
        });
        let userUpdateProfile = await userFinded.updateOne({ profile: newProfile });
        console.log({ userUpdateProfile });
    } catch (error) {
        console.log(error);
    }
}
// CreateProfile(
//     '5d1718569f484410ece5550a',
//     ['sdasd', 'adsadad', 'dadsas'],
//     ['sdasd', 'adsadad', 'dadsas'],
//     {
//         facebook: 'fb.com/cubu',
//         twitter: 'private'
//     },
//     'i can do it'
// );

const UpdateProfile = async (userId, university, major, social, desc) => {
    try {
        let userFinded = await User.findOneAndUpdate({ _id: userId }, {
            profile: {
                university, major, social, desc
            }
        }, {new : true})
        console.log(userFinded);

    } catch (error) {
        console.log(error);

    }
};
// UpdateProfile(
//     '5d1718569f484410ece5550a',
//     ['truong 1', 'truong 2'],
//     ['major 1', 'major 2'],
//     {
//         facebook: 'fb.com/cubu',
//         twitter: 'private'
//     },
//     'i can do it'
// )

const DeleteProfile = async (userId) => {
    try {
        let userFinded = await User.findOneAndDelete({_id : userId});
        console.log(userFinded);      
    } catch (error) {
        console.log(error);
    }
}