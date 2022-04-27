const knex = require('../knex');
const CUSTOMER_TABLE = 'anime';

module.exports = {
     getAll(limit = 100) {
        return knex.select().from(CUSTOMER_TABLE).limit(limit);
    }
}