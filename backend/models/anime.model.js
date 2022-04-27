const knex = require('../knex');
const ANIME_TABLE = 'anime';
const validParams = ['name'];
const requiredParams = ['name'];


module.exports = {
    getAll(limit = 100) {
        return knex.select().from(ANIME_TABLE).limit(limit);
    },
    getById(id){
        return knex.select().from(ANIME_TABLE).where({id: id}).first();
    },
    create(anime){
        this.validFields(anime);
        this.validRequiredFields(anime);
        return knex.insert(anime).into(ANIME_TABLE).returning('id');
    },
    validFields(data) {
        for (const field in data) {
            if(!validParams.includes(field)) {
                throw Error(`Invalid field: ${field}`);
            }
        }
        return;
    },
    validRequiredFields(data){
        for (const field in data) {
            if(!requiredParams.includes(field)) {
                throw Error(`Required fields missing`);
            }
        }
        return;
    },
}