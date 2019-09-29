"use strict";
const use = global.use;
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
	up() {
		this.create("users", table => {
			table.increments();
			table.string("fullname", 180).notNullable();
			table.string("shortname", 180);
			table
				.string("email")
				.notNullable()
				.unique();
			table
				.string("cpf")
				.notNullable()
				.unique();
			table.string("password", 60).notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop("users");
	}
}

module.exports = UserSchema;
