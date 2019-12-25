/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrdercashbackSchema extends Schema {
  up() {
    this.create("ordercashbacks", (table) => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("anuncianteId");
      table.string("codigoTransacao");
      table.timestamps();
    });
  }

  down() {
    this.drop("ordercashbacks");
  }
}

module.exports = OrdercashbackSchema;
