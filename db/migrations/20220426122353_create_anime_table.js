/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('anime', (table) => {
        table.increments('id').primary();
        table
            .string('name', 64)
            .unique()
            .notNullable()
            .index();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable('anime');
};
