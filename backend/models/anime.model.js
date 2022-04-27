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
    async update(id, anime){
        if (!(await this.getById(id))) {
            throw Error(`ID '${id}' does not exit`);
        }
        console.log(anime);
        this.validFields(anime);
        return knex(ANIME_TABLE).where({id: id}).update(anime).returning('*').then(data => data[0]);
    },
    async delete(id){
        if (!(await this.getById(id))) {
            throw Error(`ID '${id}' does not exit`);
        }
        return knex(ANIME_TABLE).where({id: id}).del();
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