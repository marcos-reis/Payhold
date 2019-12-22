const { test, trait, ...suite } = use('Test/Suite')('Users')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('Auth/Client')
trait('DatabaseTransactions')

test('It should register a new user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').make()
  const response = await client
    .post('/users')
    .send({
      fullname: user.fullname,
      email: user.email,
      cpf: user.cpf,
      password: user.password,
      profile: user.profile

    })
    .end()
  response.assertStatus(200)
  assert.exists(response.body.user)
})

test('It should list all user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  await Factory.model('App/Models/User').createMany(2)
  const response = await client
    .get('/users')
    .loginVia(user)
    .end()
  response.assertStatus(200)
  assert.exists(response.body.users)
})

test('It not should list all user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create({ profile: 3 })
  await Factory.model('App/Models/User').createMany(2)
  const response = await client
    .get('/users')
    .loginVia(user)
    .end()
  response.assertStatus(403)
})

test('It should list a user by id', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  await Factory.model('App/Models/User').createMany(2)
  const response = await client
    .get(`/users/${user.id}`)
    .loginVia(user)
    .end()
  response.assertStatus(200)
  assert.exists(response.body.user)
})
test('It not should list a user by id', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create({ profile: 3 })
  await Factory.model('App/Models/User').createMany(2)
  const response = await client
    .get('/users/8')
    .loginVia(user)
    .end()
  response.assertStatus(403)
})

test('It should delete a user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  const response = await client
    .delete(`/users/${user.id}`)
    .loginVia(user)
    .end()
  response.assertStatus(204)
})
test('It not should delete a user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create({ profile: 3 })
  const response = await client
    .delete('/users/8')
    .loginVia(user)
    .end()
  response.assertStatus(403)
})

test('It should update a user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create()
  const response = await client
    .put(`/users/${user.id}`)
    .loginVia(user)
    .send({
      fullname: user.fullname,
      email: user.email,
      cpf: user.cpf,
      password: user.password
    })
    .end()

  response.assertStatus(200)
  assert.exists(response.body.user)
})
test('It not should update a user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create({ profile: 3 })
  const response = await client
    .put('/users/8')
    .loginVia(user)
    .send({
      fullname: user.fullname,
      email: user.email,
      cpf: user.cpf,
      password: user.password
    })
    .end()
  response.assertStatus(403)
})
