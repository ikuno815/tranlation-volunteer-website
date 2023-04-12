/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('translation_request', (table) => {
        table.increments('id')
            .primary();
        table.integer('user_id')
            .references('id')
            .inTable('users');
        table.integer('categories_id')
            .references('id')
            .inTable('categories');
        table.integer('original_language_id')
            .references('id')
            .inTable('languages');
        table.integer('translated_language_id')
            .references('id')
            .inTable('languages');
        table.text('request', 'longtext');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('translation_request');
};
