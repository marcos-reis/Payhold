"use strict";
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { test, trait, ...suite } = use("Test/Suite")("User");
const ace = require("@adonisjs/ace");
const User = use("App/Models/User");
const Account = use("App/Models/Account");
trait("Test/ApiClient");

suite.before(async () => {
  await ace.call("migration:refresh", {}, { silent: true });
});

test("It shoul register a new user account", async ({ assert, client }) => {
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
    .post("/account")
    .send({
      cod: "060",
      bank: "Nubank",
      account: "123456",
      agency: "1234",
      owner: user.id
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body.bankaccount);
});
