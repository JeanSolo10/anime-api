/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('anime_review', (table) => {
        table.integer('anime_id')
            .notNullable()
            .unsigned();
        table.foreign('anime_id')
            .references('id')
            .inTable('anime')
            .onDelete('CASCADE');
        table.integer('review_id')
            .notNullable()
            .unsigned();
        table.foreign('review_id')
            .references('id')
            .inTable('reviews')
            .onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable('anime_review');
};
