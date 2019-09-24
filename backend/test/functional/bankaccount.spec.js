"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { test, trait, ...suite } = use("Test/Suite")("Accounts");
const ace = require("@adonisjs/ace");
const User = use("App/Models/User");
const BankAccount = use("App/Models/BankAccount");
trait("Test/ApiClient");

suite.beforeEach(async () => {
	await ace.call("migration:refresh", {}, { silent: true });
});

test("It should register a new user account", async ({ assert, client }) => {
	const user = await User.create({
		fullname: "Marcos Reis dos Santos",
		shortname: "Marcos Reis",
		email: "marcosreisdossantos01@gmail.com",
		cpf: "00011122233",
		saldo: "2.574.900,00",
		rendimento: "1500,00",
		extrato: "Em breve",
		password: "abc123"
	});
	const response = await client
		.post("/bankaccount")
		.send({
			cod: "060",
			bank: "Nubank",
			account: "123456",
			agency: "1234",
			user_id: user.id
		})
		.end();
	response.assertStatus(200);
	assert.exists(response.body.bankaccount);
});

test("It not should register a new user account with already exists data", async ({
	assert,
	client
}) => {
	await BankAccount.create({
		cod: "060",
		bank: "Nubank",
		account: "123456",
		agency: "1234",
		user_id: 1
	});

	const response = await client
		.post("/bankaccount")
		.send({
			cod: "060",
			bank: "Nubank",
			account: "123456",
			agency: "1234",
			user_id: 1
		})
		.end();

	response.assertStatus(401);
});

test("It not should register a new user account with invalid data", async ({
	client
}) => {
	const response = await client.post("/bankaccount").end();
	response.assertStatus(401);
});

test("It should list all account of a user", async ({ assert, client }) => {
	const user = await User.create({
		fullname: "Marcos Reis dos Santos",
		shortname: "Marcos Reis",
		email: "marcosreisdossantos01@gmail.com",
		cpf: "00011122233",
		saldo: "2.574.900,00",
		rendimento: "1500,00",
		extrato: "Em breve",
		password: "abc123"
	});
	await BankAccount.create({
		cod: "060",
		bank: "Nubank",
		account: "123456",
		agency: "0001",
		user_id: user.id
	});
	await BankAccount.create({
		cod: "237",
		bank: "Bradesco",
		account: "123459",
		agency: "1234",
		user_id: user.id
	});

	const response = await client.get(`/bankaccount/${user.id}`).end();

	response.assertStatus(200);
	assert.exists(response.body.bankaccounts);
});
