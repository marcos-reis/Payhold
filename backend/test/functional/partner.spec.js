"use strict";
const Partner = use("App/Models/Partner");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { test, trait, ...suite } = use("Test/Suite")("Partner");

trait("Test/ApiClient");
const ace = require("@adonisjs/ace");

suite.beforeEach(async () => {
  await ace.call("migration:refresh", {}, { silent: true });
});
test("It should register a new partner", async ({ assert, client }) => {
  const response = await client
    .post("/partner")
    .send({
      name: "Amazon",
      category: "E-commerce",
      percentage: "9,9%"
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body, "partner");
});

test("It should list all partners", async ({ assert, client }) => {
  await Partner.create({
    name: "Amazon",
    category: "E-commerce",
    percentage: "9,9%"
  });
  await Partner.create({
    name: "Dafiti",
    category: "E-commerce",
    percentage: "5,7%"
  });
  const response = await client.get("/partner").end();

  response.assertStatus(200);
  assert.exists(response.body, "partner");
});
