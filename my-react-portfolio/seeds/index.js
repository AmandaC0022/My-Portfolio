const seedHashTags = require('./hashtag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedHashTags();
  console.log('\n----- HASHTAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();