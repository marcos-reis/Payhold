"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/User", (faker, i, data) => {
  return {
    fullname: faker.name({ middle: true }),
    email: faker.email({ domain: "gmail.com" }),
    cpf: faker.cpf(),
    password: faker.string({ length: 8, pool: "abc123" }),
    ...data
  };
});

Factory.blueprint("App/Models/Partner", (faker, i, data) => {
  return {
    name: faker.company(),
    category: "E-commerce",
    percentage: `${faker.floating({ min: 0, max: 20, fixed: 1 })}%`,
    ...data
  };
});

Factory.blueprint("App/Models/BankAccount", (faker, i, data) => {
  return {
    cod: faker.integer({ min: 200, max: 300 }),
    bank: faker.company(),
    account: faker.integer({ min: 200000, max: 700000 }),
    agency: faker.integer({ min: 6000, max: 9000 }),
    user_id: null,
    ...data
  };
});

Factory.blueprint("App/Models/Financial", (faker, i, data) => {
  return {
    operation: "Cashback",
    description:"Compras na Amazon",
    value: faker.floating({ min: 50, max: 1000, fixed: 2 }),
    account_id: null,
    partner_id: null,
    user_id: null,
    ...data
  };
});
