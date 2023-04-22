const knex = require('../../db/index');

const CATEGORIES_TABLE = 'categories';


module.exports = {
    CATEGORIES_TABLE,
    getCategoriesNamebyId(categoryId) {
        return knex(CATEGORIES_TABLE)
        .select('name')
        .where('id', categoryId);
    }
}