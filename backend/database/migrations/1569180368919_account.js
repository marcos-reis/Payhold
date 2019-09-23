"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AccountSchema extends Schema {
  up() {
    this.create("accounts", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("cod", 250).notNullable();
      table.string("bank", 250).notNullable();
      table.string("agency", 250).notNullable();
      table
        .string("account", 250)
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("accounts");
  }
}

module.exports = AccountSchema;
