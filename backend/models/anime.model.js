const knex = require('../knex');
const ANIME_TABLE = 'anime';

module.exports = {
     getAll(limit = 100) {
        return knex.select().from(ANIME_TABLE).limit(limit);
    },
}