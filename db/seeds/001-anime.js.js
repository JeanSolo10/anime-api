/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('anime').del()
  await knex('anime').insert([
    {id: 1, name: 'Naruto', image_url: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg'},
    {id: 2, name: 'Kimetsu no Yaiba', image_url: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg'},
    {id: 3, name: 'Shingeki no Kyojin', image_url: 'https://cdn.myanimelist.net/images/anime/5/44560.jpg'}
  ]);
};
