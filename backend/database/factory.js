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
    fullname: faker.name(),
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
    user: null,
    ...data
  };
});
