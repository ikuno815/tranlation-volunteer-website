/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('translation_request').del()
  await knex('reviews').del()
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'Viola', profile_bio: 'Hi, I am a restaurant owner in Japan.', email: 'viola@viola.com'},
    {id: 2, username: 'Satoko', profile_bio: 'こんにちは。日本語の教師をしています。', email: 'satoko@satoko.com'},
    {id: 3, username: 'Jake', profile_bio: 'I need some help with English.', email: 'jake@jake.com'},
    {id: 4, username: 'Monica', profile_bio: 'Hola, me llamo Monica. Soy de Madrid.', email: 'monica@monica.com'},
    {id: 5, username: 'Leona', profile_bio: 'I speak Japanese, Spanish and English.', email: 'leona@leona.com'},
  ]);
};
