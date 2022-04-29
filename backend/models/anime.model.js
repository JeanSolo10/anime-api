const knex = require('../knex');
const ANIME_TABLE = 'anime';
const validParams = ['name'];
const requiredParams = ['name'];
const axios = require("axios");


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

        //Add image url to images
        const { name } = anime;
        const animeID = await this.getAnimeIdFromExternalAPI(anime.name);
        if (animeID !== undefined) {
            anime["image_url"] = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/pictures`)
            .then((response) => response.data)
            .then((data) => data.data[0].jpg.image_url); 
        }
        return knex.insert(anime).into(ANIME_TABLE).returning('*');
    },
    async update(id, anime){
        if (!(await this.getById(id))) {
            throw Error(`ID '${id}' does not exit`);
        }
        this.validFields(anime);
        // update image as well
        const animeID = await this.getAnimeIdFromExternalAPI(anime.name);
        if (animeID !== undefined) {
            anime["image_url"] = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/pictures`)
            .then((response) => response.data)
            .then((data) => data.data[0].jpg.image_url); 
        }
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
    async getAnimeIdFromExternalAPI(name) {
        const id = axios.get(`https://api.jikan.moe/v4/anime?q=${name}`)
            .then((response) => {
                return response.data.data
            })
            .then((data) => 
            {
                const cleanedData = data.filter(anime => {
                    let foundInSynonms;
                    if (anime.title_synonms === undefined) {
                        foundInSynonms = false;
                    } else {
                        foundInSynonms = anime.title_synonms.includes(name);
                    }
                    return foundInSynonms || anime.title_english === name || anime.title === name
                })
                if (cleanedData.length < 1 || cleanedData[0].mal_id === undefined) {
                    return undefined;
                }
                return cleanedData[0].mal_id;
            }
            )
        return id;
    },
}