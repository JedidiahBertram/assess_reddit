'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable("comments", function(table) {
        table.increments()
            .primary();
        table.string("comment_body")
            .notNullable()
            .defaultTo();
        table.integer('post_id')
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .index();
        table.timestamp('created_at')
            .notNullable()
            .defaultTo(knex.raw('now()'));
        table.timestamp('updated')
            .notNullable()
            .defaultTo(knex.raw('now()'));
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments');
};
