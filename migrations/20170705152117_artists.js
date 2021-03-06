"use strict";

exports.up = (knex, Promise) => {
  return knex.schema.createTable('artists', table => {
    table.increments();
    table.string('name')
      .notNullable();
    table.string('store')
      .notNullable();
    table.text('bio')
      .notNullable();
    table.text('tags')
      .notNullable();
    table.string('headshot')
      .notNullable();
    table.string('img_url1')
      .notNullable();
    table.string('img_url2')
      .notNullable();
    table.string('img_url3')
      .notNullable();
    table.string('img_url4')
      .notNullable();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('artists');
};
