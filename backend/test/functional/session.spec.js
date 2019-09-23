"use strict";
const use = global.use;
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use("App/Models/User");
const { test, trait, ...suite } = use("Test/Suite")("Sessions");

trait("Test/ApiClient");
trait("DatabaseTransactions");

const ace = require("@adonisjs/ace");

suite.before(async () => {
  await ace.call("migration:refresh", {}, { silent: true });
});

test("it should receiver a token when authenticated", async ({
  assert,
  client
}) => {
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
    .post("/session")
    .send({
      email: user.email,
      password: "abc123"
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body.token);
});
