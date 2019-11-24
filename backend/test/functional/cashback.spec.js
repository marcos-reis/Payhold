'use strict'

const { test, trait, ...suite } = use('Test/Suite')('Cashback')

const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')
trait('DatabaseTransactions')

test('it should include cashback in account', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  const partner = await Factory.model('App/Models/Partner').create()
  const bankaccount = await Factory.model('App/Models/BankAccount').create({ user_id: user.id })

  const cashback = await Factory.model('App/Models/Cashback').make({ operation: 'Cashback' })

  const response = await client
    .post('/cashbacks')
    .loginVia(user)
    .send({
      user_id: user.id,
      account_id: bankaccount.id,
      partner_id: partner.id,
      description: cashback.description,
      value: cashback.value
    })
    .end()
  response.assertStatus(200)
})
