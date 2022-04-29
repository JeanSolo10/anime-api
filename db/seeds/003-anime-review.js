/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('anime_review').del()
  await knex('anime_review').insert([
    {anime_id:1, review_id:1},
    {anime_id:1, review_id:2},
    {anime_id:2, review_id:3}
  ]);
};
