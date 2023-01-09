const { Post } = require("../models");
const sequelize = require('../config/connection');

const postData = [
  {
    title: "How to make a post",
    post_text:
      "add a title and some text to the post and click on the submit button",
    user_id: 1,
  },
  {
    title: "How to make a comment",
    post_text: "  add a comment and click on the submit button",
    user_id: 1,
  },
  {
    title: "how to make a user",
    post_text:
      "add a username and password and click on the submit button",
    user_id: 4,
  },
  {
    title: "add something of interest to you ...anything!!",
    post_text:
      " add a title and some text to the post and click on the submit button",
    user_id: 5,
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
