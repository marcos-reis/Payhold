'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransferSchema extends Schema {
  up () {
    this.create('transfers', (table) => {
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
        .inTable('bankaccounts')
        .notNullable()

      table.string('description').defaultTo('Transferencia')

      table.float('value').notNullable()

      table.boolean('confirmed').defaultTo(0).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('transfers')
  }
}

module.exports = TransferSchema
