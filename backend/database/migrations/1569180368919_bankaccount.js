'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BankAccountSchema extends Schema {
  up () {
    this.create('bankaccounts', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users').notNullable()

      table.string('bank').notNullable()
      table.integer('cod').notNullable()
      table.integer('agency').notNullable()
      table.string('thumbnail')
      table
        .integer('account')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bankaccounts')
  }
}

module.exports = BankAccountSchema
