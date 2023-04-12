/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'Viola', profile_bio: 'Hi, I am a restaurant owner in Japan.'},
    {id: 2, username: 'Satoko', profile_bio: 'こんにちは。日本語の教師をしています。'},
    {id: 3, username: 'Jake', profile_bio: 'I need some help with English.'},
    {id: 4, username: 'Monica', profile_bio: 'Hola, me llamo Monica. Soy de Madrid.'},
    {id: 5, username: 'Leona', profile_bio: 'I speak Japanese, Spanish and English.'},
  ]);
};
