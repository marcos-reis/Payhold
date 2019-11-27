const { test, trait, ...suite } = use('Test/Suite')('Transfer')

const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')
trait('DatabaseTransactions')

test('it should realize a request of transfer for bank account', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  const bankaccount = await Factory.model('App/Models/BankAccount').create({ user_id: user.id })
  const transfer = await Factory.model('App/Models/Transfer').make()

  const response = await client
    .post('/transfers')
    .loginVia(user)
    .send({
      user_id: user.id,
      account_id: bankaccount.id,
      description: transfer.description,
      value: transfer.value
    })
    .end()
  response.assertStatus(200)
})

test('it should list all the request of transfer for bank account', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  const bankaccount = await Factory.model('App/Models/BankAccount').create({ user_id: user.id })
  await Factory.model('App/Models/Transfer').create({ user_id: user.id, account_id: bankaccount.id })

  const response = await client
    .get('/transfers')
    .loginVia(user)
    .send({
    })
    .end()
  response.assertStatus(200)
})

test('it confirme a transfer for bank account', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  const bankaccount = await Factory.model('App/Models/BankAccount').create({ user_id: user.id })
  const transfer = await Factory.model('App/Models/Transfer').create({ user_id: user.id, account_id: bankaccount.id })

  const response = await client
    .put(`/transfers/${transfer.id}`)
    .loginVia(user)
    .send({
      description: 'Transferência realizada',
      confirmed: 1
    })
    .end()
  response.assertStatus(200)
})
