const { Comment } = require('../models');
const sequelize = require('../config/connection');

const commentData = [
  {
    comment_text: "i love to go to the beach ",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "cant wait for summer ",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "i want to understand this assignment",
    post_id: 4,
    user_id: 2
  },
];

const seedGallery = () => Comment.bulkCreate(commentData);

module.exports = seedGallery;

// const userData = require('./userData.json');





