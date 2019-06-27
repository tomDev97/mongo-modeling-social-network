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



Comment.aggregate()
    .facet({
        post: [
            { $match: { postId: mongoose.Types.ObjectId('5d1385c02f197a2d6c1a286c') } }, //mongooose.types
            {
                $bucketAuto:
                {
                    groupBy: '$postId',
                    buckets: 1,
                    output: {
                        comments: { $push: { content: '$content' } }
                    }
                }
            }

        ]
    })
    .exec()
    .then(comments => console.log(JSON.stringify(comments)))
    .catch(console.log)
