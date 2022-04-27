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
        if (!this.validFields(anime)) {
            throw Error(`Invalid field passed`);
        } else if (!this.validRequiredFields(anime)) {
            throw Error(`Required fields missing`);
        }
        return knex.insert(anime).into(ANIME_TABLE).returning('id');
    },
    validFields(data) {
        for (const field in data) {
            if(!validParams.includes(field)) {
                return false;
            }
        }
        return true;
    },
    validRequiredFields(data){
        for (const field in data) {
            if(!requiredParams.includes(field)) {
                return false;
            }
        }
        return true;
    }
}