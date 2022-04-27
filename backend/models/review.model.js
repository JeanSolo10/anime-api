const knex = require('../knex');
const REVIEW_TABLE = 'reviews';
const ANIME_REVIEW_TABLE = 'anime_review';
const validParams = ['rating', 'comment', 'anime_id'];
const requiredParams = ['rating', 'anime_id'];

module.exports = {
    getAll(limit = 100) {
        return knex.select().from(REVIEW_TABLE).limit(limit);
    },
    getReviewByAnimeId(id){
        return knex.select().from(REVIEW_TABLE).where({anime_id: id});
    },
    getReviewById(id){
        return knex.select().from(REVIEW_TABLE).where({id: id}).first();
    },
    async create(review){
        this.validFields(review);
        this.validRequiredFields(review);
        if (review.rating < 0 || review.rating > 10) {
            throw Error(`Rating must be a value between 1-10!`);
        }
        const createdReview = await knex.insert(review).into(REVIEW_TABLE).returning('*').then(data=>data[0]);
        await knex.insert({anime_id: createdReview.anime_id, review_id: createdReview.id}).into(ANIME_REVIEW_TABLE);
        return createdReview;
    },
    async update(id, review){
        if (!(await this.getReviewById(id))) {
            throw Error(`Review with ID: '${id}' does not exit`);
        }
        this.validFields(review);
        if (review.anime_id) {
            throw Error(`Anime id cannot be modified`);
        }
        return knex(REVIEW_TABLE).where({id: id}).update(review).returning('*').then(data => data[0]);
    },
    async delete(id){
        if (!(await this.getReviewById(id))) {
            throw Error(`Review with ID: '${id}' does not exit`);
        }
        return knex(REVIEW_TABLE).where({id: id}).del();
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