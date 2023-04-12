/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('translation_suggest', (table) => {
        table.increments('id')
            .primary();
        table.integer('user_id')
            .references('id')
            .inTable('users');
        table.integer('request_id')
            .references('id')
            .inTable('translation_request');
        table.boolean('best_answer');
        table.text('suggestion', 'longtext');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('translation_suggest');
};
