'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CashbackSchema extends Schema {
  up () {
    this.create('cashbacks', (table) => {

      table.increments();

      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");

      table
        .integer("partner_id")
        .unsigned()
        .references("id")
        .inTable("partners");

      table.string("description");

      table.float("value");

      table.timestamps();

    })
  }

  down () {
    this.drop('cashbacks')
  }
}

module.exports = CashbackSchema
