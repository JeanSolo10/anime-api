const knex = require('../knex');

module.exports = {
    /**
     * @param {number} limit - The max number of customers to return.
     * @return {Promise<Array>} A promise that resolves to an array of anime.
     */
    getAll(tableName, limit = 100) {
        return knex.select().from(tableName).limit(limit);
    }
}