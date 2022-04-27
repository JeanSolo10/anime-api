/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('reviews', (table) => {
        table.increments('id').primary();
        table.string('comment', 300)
            .unique()
            .index();
        table.integer('rating')
            .notNullable();
        table.integer('anime_id')
            .unsigned();
        table.foreign('anime_id')
            .references('id')
            .inTable('anime')
            .onDelete('CASCADE');
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable('reviews');
};
