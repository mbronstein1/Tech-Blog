const { User } = require('../models');

const userData = {
    username: "mbronstein1",
    password: "shotgun"
};

const seedUsers = () => User.create(userData);

module.exports = seedUsers;