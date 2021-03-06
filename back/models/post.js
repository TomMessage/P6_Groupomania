const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    imageUrl: { type: String, },
    content: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    usersLiked: [{ type: String }],
    usersDisliked: [{ type: String }],

});

module.exports = mongoose.model('post', postSchema);