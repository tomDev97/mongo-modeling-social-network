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

/**
 * Func create user use ASYNC AWAIT ES7
 */
const CreateUser = async (username, password, name, email, dateOfBirth, registedDate) => {
    try {
        let checkUsernameExits = await User.findOne({ $or: [{ username }, { email }] });
        if (checkUsernameExits) {
            return console.log(' username or email exits');
        }
        let newUser = await new User({ username, password, name, email, dateOfBirth });
        newUser.save();
        console.log(newUser);
    } catch (error) {
        console.log(error);
    }

}
/**
 * Instance
 */
// CreateUser(
//     'tomdev97',
//     'tomdev97',
//     'tomdev97',
//     'tomdev97@gmail.com',
//     '05 /08 / 1997'
// )

/**
 * UPDATE USER
 */
const UpdateUser = async (userId, username, password, name, email) => {
    try {
        let userFinded = await User.findByIdAndUpdate({ _id: userId }, {
            username, password, name, email
        }, { new: true });
        userFinded.save();
        console.log(userFinded);

    } catch (error) {
        console.log(error);

    }
};

// UpdateUser(
//     '5d168f0a5be9f6242ca43ce7',
//     'usernameUpdate',
//     'pwUpdate',
//     'chandoi79',
//     'haizz@gmail.com' 
// )

const DeleteUser = async (userId) => {
    let userRemove = await User.findOneAndDelete({ _id : userId});
    console.log(userRemove);
}
// DeleteUser('5d168f0a5be9f6242ca43ce7');