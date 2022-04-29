/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {id: 1, comment: "Naruto was the first anime I ever watched. And I'm glad it was!", rating: 9, anime_id: 1},
    {id: 2, comment: "Naruto's story revolved around a obnoxious kid named Naruto, if you don't like him, then it's not very likely that you'll love the series.", rating: 6, anime_id: 1},
    {id: 3, comment: "Demon Slayer is considered to be one of the best anime out there currently, and I personally find that statement to be true.", rating: 8, anime_id: 2}
  ]);
};
