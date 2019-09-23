"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { test, trait, ...suite } = use("Test/Suite")("Users");

trait("Test/ApiClient");
const ace = require("@adonisjs/ace");

suite.before(async () => {
  await ace.call("migration:refresh", {}, { silent: true });
});
test("It shoul register a new user", async ({ assert, client }) => {
  const response = await client
    .post("/user")
    .send({
      fullname: "Marcos Reis dos Santos",
      shortname: "Marcos Reis",
      email: "marcosreisdossantos01@gmail.com",
      cpf: "12345678910",
      //saldo: "2.574.900,00",
      rendimento: "1500,00",
      //extrato: "Em breve",
      password: "abc123"
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body.user);
});
