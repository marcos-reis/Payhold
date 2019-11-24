'use strict'

const { test, trait, ...suite } = use('Test/Suite')('Transfer')

const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')
trait('DatabaseTransactions')

test('it should realize transfer for account', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  const bankaccount = await Factory.model('App/Models/BankAccount').create({ user_id: user.id })
  const transfer = await Factory.model('App/Models/Transfer').make()

  const response = await client
    .post('/transfers')
    .loginVia(user)
    .send({
      user_id: user.id,
      account_id: bankaccount.id,
      value: transfer.value
    })
    .end()
  response.assertStatus(200)
})
