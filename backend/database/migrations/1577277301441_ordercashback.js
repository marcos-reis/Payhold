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
			table.string("partnersId");
			table.string("description");
			table.string("orderNumber");
			table.string("valueTotal");
			table.string("commissTotal");
			table.string("valueCashback");
			table.string("percentCashback");
			table.boolean("confirmed").defaultTo(0).notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop("ordercashbacks");
	}
}

module.exports = OrdercashbackSchema;
