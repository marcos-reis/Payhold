"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PartnerSchema extends Schema {
  up() {
    this.create("partners", table => {
      table.increments();
      table
        .string("name", 80)
        .notNullable()
        .unique();
      table.string("category", 80).notNullable();
      table.string("percentage", 80).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("partners");
  }
}

module.exports = PartnerSchema;
