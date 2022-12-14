const { Post } = require('../models');

const postData =
    {
        title: "Why MVC is so important",
        text: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
        user_id: "1"
    }

const seedPosts = () => Post.create(postData)

module.exports = seedPosts;