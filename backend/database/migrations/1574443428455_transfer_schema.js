'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransferSchema extends Schema {
  up () {
    this.create('transfers', (table) => {
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
      table.float("value");
      table.timestamps();
    })
  }

  down () {
    this.drop('transfers')
  }
}

module.exports = TransferSchema
