const knex = require('../../db/index');

const LANGUAGES_TABLE = 'languages';


module.exports = {
    LANGUAGES_TABLE,
    getLangNamebyId(langId) {
        return knex(LANGUAGES_TABLE)
        .select('name')
        .where('id', langId);
    }
}