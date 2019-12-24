'use strict'

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
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker, i, data) => {
  return {
    fullname: faker.name({ middle: true }),
    shortname: faker.name(),
    email: faker.email({ domain: 'gmail.com' }),
    cpf: faker.cpf(),
    profile: faker.integer({ min: 1, max: 2 }),
    password: faker.string({ length: 8, pool: 'abc123' }),
    ...data
  }
})
Factory.blueprint('App/Models/Token', (faker, i, data) => {
  return {
    type: data.type || 'refreshToken',
    token: faker.string({length:20}),
    ...data
  }
})

Factory.blueprint('App/Models/Partner', (faker, i, data) => {
  return {
    name: faker.company(),
    category: 'E-commerce',
    percentageAverage: `${faker.floating({ min: 0, max: 1, fixed: 2 })}`,
    description: faker.paragraph(),
    url: faker.url(),
    theme: '#501970',
    ...data
  }
})

Factory.blueprint('App/Models/BankAccount', (faker, i, data) => {
  return {
    cod: faker.integer({ min: 200, max: 300 }),
    bank: faker.company(),
    account: faker.integer({ min: 200000, max: 700000 }),
    agency: faker.integer({ min: 6000, max: 9000 }),
    user_id: null,
    ...data
  }
})

Factory.blueprint('App/Models/Cashback', (faker, i, data) => {
  return {
    description: 'Compras na Amazon',
    value: faker.floating({ min: 50, max: 1000, fixed: 2 }),
    partner_id: null,
    user_id: null,
    ...data
  }
})

Factory.blueprint('App/Models/Transfer', (faker, i, data) => {
  return {
    value: faker.floating({ min: 50, max: 1000, fixed: 2 }),
    description: 'Solicitação de Transferência',
    account_id: null,
    user_id: null,
    ...data
  }
})

Factory.blueprint('App/Models/RequestTransfer', (faker, i, data) => {
  return {
    value: faker.floating({ min: 50, max: 1000, fixed: 2 }),
    account_id: null,
    user_id: null,
    ...data
  }
})
