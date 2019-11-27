'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorypartnerSchema extends Schema {
  up () {
    this.create('categorypartners', (table) => {
      table.increments()
      table.string('category', 80).notNullable()
      table.float('percentage', 80).notNullable()

      table
        .integer('partner_id')
        .unsigned()
        .references('id')
        .inTable('partners')
        .notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('categorypartners')
  }
}

module.exports = CategorypartnerSchema
