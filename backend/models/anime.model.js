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
    getByName(name){
        return knex.select().from(ANIME_TABLE).whereILike('name', `${name}`).first();
    },
    async create(anime){
        this.validFields(anime);
        this.validRequiredFields(anime);
        const animeExists = await this.getByName(anime.name) ? true : false;
        if (animeExists){
            throw Error(`Anime already exists!`);
        }
        return knex.insert(anime).into(ANIME_TABLE).returning('id');
    },
    async update(id, anime){
        if (!(await this.getById(id))) {
            throw Error(`ID '${id}' does not exit`);
        }
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
        for (const field of requiredParams) {
            if(!(field in data)) {
                throw Error(`Required fields missing`);
            }
        }
        return;
    },
}