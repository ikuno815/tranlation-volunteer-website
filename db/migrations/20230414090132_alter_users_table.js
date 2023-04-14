/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.alterTable('users', (table) => {
        table.varchar('email')
            .unique();
        table.varchar('uid');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.alterTable('users', (table) => {
        table.dropColumn('email');
        table.dropColumn('uid');
    });
};
