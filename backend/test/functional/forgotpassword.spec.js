const Mail = use('Mail')
const { test, trait, ...suite  } = use('Test/Suite')('Forgotpassword')
const Factory = use('Factory')

trait('Test/ApiClient')
trait('DatabaseTransactions')

test('It should register a new user', async ({ assert, client }) => {
  const user = await Factory.model('App/Models/User').create({email:'marcos@payhold.com.br'})
  const response = await client
    .post('/forgotpassword')
    .send({email:user.email})
    .end()
  response.assertStatus(204)
})
