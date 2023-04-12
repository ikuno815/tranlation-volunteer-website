/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {id: 1, reviewer_id: 2, reviewee_id: 5, rating: 3},
    {id: 2, reviewer_id: 3, reviewee_id: 4, rating: 2},
    {id: 3, reviewer_id: 4, reviewee_id: 3, rating: 1},
    {id: 4, reviewer_id: 1, reviewee_id: 2, rating: 5},
    {id: 5, reviewer_id: 5, reviewee_id: 1, rating: 4},
  ]);
};
