const { User } = require('../models');

const userData = {
    username: "test1",
    password: "12345678"
};

const seedUsers = () => User.create(userData);

module.exports = seedUsers;