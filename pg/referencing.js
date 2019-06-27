const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(console.log("Connected to MongoDB"))
    .catch(console.log)


//create postSchema
const PostSchema = new mongoose.Schema({
    title : { type : String, require : true },
    content : { type : String, required : true }
})
const Post = mongoose.model('post', PostSchema);
//create comment schema
const CommentSchema = new mongoose.Schema({
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'post'
    },
    user : { type : String, require : true },
    content : { type : String, required : true }
})
const Comment = mongoose.model('comment', CommentSchema);

// create itance
// const newPost = new Post({
//     title: 'AFF CUP 2018',
//     content: 'VN WINNER'
// })
// newPost.save()
//     .then(console.log)
//     .catch(console.log)



//create intance comment
// const comment1 = new Comment({
//     postId: newPost._id,
//     user: 'User 1',
//     content: 'VN da hay qua'
// })

// const comment2 = new Comment({
//     postId: newPost._id,
//     user: 'User 2',
//     content: 'VN se vo dich asian cup 2018'
// })

// const comment3 = new Comment({
//     postId: newPost._id,
//     user: 'User 3',
//     content: 'VN chap brazil 3 trai'
// })
// comment1.save()
//     .then(console.log)
//     .catch(console.log)

// comment2.save()
//     .then(console.log)
//     .catch(console.log)

// comment3.save()
//     .then(console.log)
//     .catch(console.log)

Comment.find()
    .populate('postId', 'title -_id')
    .then(console.log)
    .catch(console.log)

