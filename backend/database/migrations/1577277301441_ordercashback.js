/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrdercashbackSchema extends Schema {
  up() {
    this.create("ordercashbacks", (table) => {
      table.increments();
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
