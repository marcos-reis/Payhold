
const { test, trait, ...suite } = use('Test/Suite')('Forgotpassword')
const Factory = use('Factory')
const Mail = use('Mail')

trait('Test/ApiClient')
trait('Auth/Client')
trait('DatabaseTransactions')

test('It should send a new email with', async ({ assert, client }) => {
  Mail.fake()

  // write your test

  const forgotPayload = { email: 'marcos@payhold.com.br', shortname: 'Marcos Reis' }
  const user = await Factory.model('App/Models/User').create(forgotPayload)
  const response = await client.post('/forgotpassword').send({ email: user.email }).end()

  const recentEmail = Mail.pullRecent()
  assert.equal(recentEmail.message.to[0].address, user.email)
  assert.equal(recentEmail.message.to[0].name, user.shortname)

  Mail.restore()

  assert.equal(response.status, 204)
})
