/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PartnerSchema extends Schema {
  up() {
    this.create("partners", (table) => {
      table.increments();
      table.string("name", 80).notNullable();
      table.string("description").notNullable();
      table.string("category", 80).notNullable();
      table.float("percentage", 80).notNullable();
      table.string("thumbnail");
      table.string("url").notNullable();
      table.string("theme").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("partners");
  }
}

module.exports = PartnerSchema;
