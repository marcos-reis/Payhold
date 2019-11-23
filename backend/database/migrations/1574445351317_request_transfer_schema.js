'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestTransferSchema extends Schema {
  up () {
    this.create('request_transfers', (table) => {

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

      table.string("description").defaultTo('Solicitação de Transferência')

      table.float("value");

      table.timestamps();

    })
  }

  down () {
    this.drop('request_transfers')
  }
}

module.exports = RequestTransferSchema
