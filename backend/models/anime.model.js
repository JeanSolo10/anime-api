const knex = require('../knex');
const ANIME_TABLE = 'anime';

module.exports = {
     getAll(limit = 100) {
        return knex.select().from(ANIME_TABLE).limit(limit);
    },
    getById(id){
        return knex.select().from(ANIME_TABLE).where({id: id}).first();
    },
}