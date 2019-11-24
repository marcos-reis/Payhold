'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestTransferSchema extends Schema {
  up () {
    this.create('request_transfers', (table) => {
      table.increments()

      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()

      table
        .integer('account_id')
        .unsigned()
        .references('id')
        .inTable('accounts')
        .notNullable()

      table.string('description').defaultTo('Solicitação de Transferência') // Transferencia Realizada

      table.string('operation').defaultTo('Transferência')

      table.string('status').defaultTo('Pendente')// null

      table.float('value')
        .notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('request_transfers')
  }
}

module.exports = RequestTransferSchema
