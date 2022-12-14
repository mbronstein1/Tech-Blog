const seedPosts = require('./postData');
const seedUsers = require('./userData');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: false });
   
    await seedUsers();

    await seedPosts();

    process.exit(0);
};

seedAll();