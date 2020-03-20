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

			table.string("partner_id");

			table.string("description").notNullable();

			table.float("value").notNullable();
			table.float("percent").notNullable();
			table.boolean("confirmed").defaultTo(0).notNullable();

			table.timestamps();
		});
	}

	down() {
		this.drop("cashbacks");
	}
}

module.exports = CashbackSchema;
