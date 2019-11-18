"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FinancialSchema extends Schema {
  up() {
    this.create("financials", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table
        .integer("account_id")
        .unsigned()
        .references("id")
        .inTable("accounts");
      table
        .integer("partner_id")
        .unsigned()
        .references("id")
        .inTable("partners");
      table.string("operacao");
      table.string("descricao");
      table.float("valor");
      table.timestamps();
    });
  }

  down() {
    this.drop("financials");
  }
}

module.exports = FinancialSchema;
