const { User } = require("../models");
const sequelize = require("../config/connection");

const userData = [
  {
    name: "ana",

    password: "password1234",
  },
  {
    name: "conrad",

    password: "password1234",
  },
  {
    name: "Gia",

    password: "password1234",
  },
  {
    name: "Nikita",

    password: "password1234",
  },
  {
    name: "Ben",

    password: "password1234",
  },
];

const seedGallery = () => User.bulkCreate(userData);

module.exports = seedGallery;
