/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable('reviews', (table) => {
        table.increments('id')
            .primary();
        table.integer('reviewer_id')
            .references('id')
            .inTable('users');
        table.integer('reviewee_id')
            .references('id')
            .inTable('users');
        table.integer('rating');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('reviews');
};
