const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
  {
    username: "ana",
   
    password: "password1234"
  },
  {
    username: "conrad",
    
    password: "password1234"
  },
  {
    username: "Gia",
   
    password: "password1234"
  },
  {
    username: "Nikita",
   
    password: "password1234"
  },
  {
    username: "Ben",
   
    password: "password1234"
  }
];

const seedGallery = () => User.bulkCreate(userData);

module.exports = seedGallery;
