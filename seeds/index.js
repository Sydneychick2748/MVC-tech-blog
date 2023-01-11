const sequelize = require('../config/connection');
const seedComment = require('./commentSeeds');
const seedPost = require('./postSeeds');
const seedUser = require('./userSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedPost();

  

  await seedComment();

  process.exit(0);
};

seedAll();


