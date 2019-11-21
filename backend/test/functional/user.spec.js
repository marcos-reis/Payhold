const { test, trait, ...suite } = use("Test/Suite")("Users");
const Factory = use("Factory");

trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("It should register a new user", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").make();
  const response = await client
    .post("/users")
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

test("It should list all user", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  await Factory.model("App/Models/User").createMany(2);
  const response = await client
    .get("/users")
    .loginVia(user)
    .end();
  response.assertStatus(200);
  assert.exists(response.body.users);
});

test("It should list a user by id", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  await Factory.model("App/Models/User").createMany(2);
  const response = await client
    .get(`/users/${user.id}`)
    .loginVia(user)
    .end();
  response.assertStatus(200);
  assert.exists(response.body.user);
});

test("It should delete a user", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  const response = await client
    .delete(`/users/${user.id}`)
    .loginVia(user)
    .end();
  response.assertStatus(204);
});
