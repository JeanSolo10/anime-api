const knex = require('../knex');
const REVIEW_TABLE = 'reviews';
const validParams = ['rating', 'comment', 'anime_id'];
const requiredParams = ['rating', 'anime_id'];

module.exports = {
    getAll(limit = 100) {
        return knex.select().from(REVIEW_TABLE).limit(limit);
    },
    getById(id){
        return knex.select().from(REVIEW_TABLE).where({anime_id: id});
    },
    async create(review){
        this.validFields(review);
        this.validRequiredFields(review);
        if (review.rating < 0 || review.rating > 10) {
            throw Error(`Rating must be a value between 1-10!`);
        }
        return knex.insert(review).into(REVIEW_TABLE).returning('id');
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