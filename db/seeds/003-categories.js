/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('categories').del()
  await knex('categories').insert([
    {id: 1, name: 'Restaurants/Shops'},
    {id: 2, name: 'Signboards/Posters'},
    {id: 3, name: 'Letters/Messages'},
    {id: 4, name: 'Others'},
  ]);
};
