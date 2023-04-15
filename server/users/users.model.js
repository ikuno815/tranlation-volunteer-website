const knex = require('../../db/index');

const USERS_TABLE = 'users';

module.exports = {
    USERS_TABLE,
    getUserInfobyEmail(email) {
        return knex(USERS_TABLE)
            .select('*')
            .where('email', email);
    },
    createNewUser(username, email) {
        return knex(USERS_TABLE)
            .insert({
                username: username,
                email: email
            });
    }
}