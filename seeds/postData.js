const { Post } = require('../models');

const postData = 
[
    {
        "postTitle": "Magic man saves the day",
        "postContent": "This just in: Magic Man willingly sends himself to mars to save Glob and ooo. He will forver be known as a hero!",
        "userId": 1
    },

    {
        "postTitle": "Magic man is a liar and a thief",
        "postContent": "Magic Mans stole my sandwich",
        "userId": 2
    },

    {
        "postTitle": "Looking for help working on my computer",
        "postContent": "I guess a robot really...BMO is okay, just a little slow",
        "userId": 3
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;

