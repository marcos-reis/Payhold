"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { test, trait, ...suite } = use("Test/Suite")("Register");

trait("Test/ApiClient");
const ace = require("@adonisjs/ace");

suite.before(async () => {
  await ace.call("migration:refresh", {}, { silent: true });
});
test("It shoul register a new user", async ({ assert, client }) => {
  const response = await client
    .post("/register")
    .send({
      fullname: "Marcos Reis dos Santos",
      email: "marcosreisdossantos01@gmail.com",
      cpf: "13245678910",
      password: "abc123"
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body, "user");
});
