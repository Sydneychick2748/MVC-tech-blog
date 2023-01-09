const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
  {
    username: "ana",
    email: "ana@ana.com",
    password: "password1234"
  },
  {
    username: "conrad",
    email: "conrad@conrad.com",
    password: "password1234"
  },
  {
    username: "Gia",
    email: "gia@gia.com",
    password: "password1234"
  },
  {
    username: "Nikita",
    email: "ninta@nikta.com",
    password: "password1234"
  },
  {
    username: "Ben",
    email: "ben@ben.com",
    password: "password1234"
  }
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
