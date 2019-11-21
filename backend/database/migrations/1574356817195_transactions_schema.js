'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionsSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
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
      table.string("operation");
      table.string("description");
      table.float("value");
      table.timestamps();
    });
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionsSchema
