const {sequelize, User, Vest} = require('../src/models');

const Promise = require('bluebird');
const vests = require('./storage.json');
const users = require('./users.json');

sequelize.sync({force: true})
.then(async function () {
    await Promise.all(
        users.map(user => {
            User.create(user)
        })
    );

    await Promise.all(
        vests.map(vest => {
            Vest.create(vest)
        })
    );
});