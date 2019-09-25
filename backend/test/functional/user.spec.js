const { test, trait, ...suite } = use("Test/Suite")("Users");
const Factory = use("Factory");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("It shoul register a new user", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").make();
  const response = await client
    .post("/user")
    .send({
      fullname: user.fullname,
      email: user.email,
      cpf: user.cpf,
      password: user.password
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body.user);
});
