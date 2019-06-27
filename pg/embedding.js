const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(console.log("Connected to MongoDB"))
    .catch(console.log)

//CREATE PROFILE SCHEMA
const ProfileSchema = new mongoose.Schema({
    university : { type : String },
    major : { type : String }
})
const Profile = mongoose.model('profile', ProfileSchema);

//CREATE USER SCHEMA
const UserSchema = new mongoose.Schema({
    useranme : { type : String, required : true },
    password : { type : String, required : true },
    profile : {
        type : ProfileSchema,
        required : true
    }
})
const User = mongoose.model('user', UserSchema);


//create instance

// var newUser = new User({
//     useranme : 'Tomdev',
//     password : 'password',
//     profile : {
//         university : 'Hutech',
//         major : 'Student'
//     }
// })
// newUser.save()
//     .then(console.log)
//     .catch(console.log)

//query
User.find({})
    .select('profile -_id')
    .then(console.log)
    .catch(console.log)