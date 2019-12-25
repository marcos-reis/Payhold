/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CashbackSchema extends Schema {
  up() {
    this.create("cashbacks", (table) => {
      table.increments();

      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .notNullable();

      table
        .integer("partner_id")
        .unsigned()
        .references("id")
        .inTable("partners")
        .notNullable();

      table.string("description").notNullable();

      table.float("value").notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop("cashbacks");
  }
}

module.exports = CashbackSchema;
