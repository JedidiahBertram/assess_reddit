'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function(table) {
        table.increments()
            .primary();
        table.string("full_name")
            .notNullable()
            .defaultTo();
        table.string("username")
            .notNullable()
            .defaultTo();
        table.timestamp('created_at')
            .notNullable()
            .defaultTo(knex.raw('now()'));
        table.timestamp('updated')
            .notNullable()
            .defaultTo(knex.raw('now()'));
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
