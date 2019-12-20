const { test, trait, ...suite } = use('Test/Suite')('Sessions')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')
trait('DatabaseTransactions')

test('it should receiver a token when authenticated', async ({
  assert,
  client
}) => {
  const user = await Factory.model('App/Models/User').create({
    password: 'abc123'
  })

  const response = await client
    .post('/sessions')
    .send({
      email: user.email,
      password: 'abc123'
    })
    .end()
  response.assertStatus(200)
  assert.exists(response.body.token)
})

test('it should receiver a token of updated', async ({
  assert,
  client
}) => {
  const user = await Factory.model('App/Models/User').create({
    password: 'abc123'
  })

  const response = await client
    .post('/sessions')
    .send({
      email: user.email,
      password: 'abc123',
      withRefreshToken: true
    })
    .end()
  response.assertStatus(200)
  assert.exists(response.body.refreshToken)
})

test('it should refresh a token ', async ({
  assert,
  client
}) => {
  const user = await Factory.model('App/Models/User').create({
    password: 'abc123'
  })

  const response = await client
    .post('/sessions')
    .send({
      email: user.email,
      password: 'abc123',
      withRefreshToken: true
    })
    .end()

  const response2 = await client
    .put('/sessions')
    .send({
      token: response.body.token,
      refreshToken: response.body.refreshToken
    }
    )
    .end()
  response.assertStatus(200)
  assert.exists(response2.body.refreshToken, response2.body.token)
})
