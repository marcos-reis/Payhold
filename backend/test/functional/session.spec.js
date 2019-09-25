const { test, trait, ...suite } = use("Test/Suite")("Sessions");
const Factory = use("Factory");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("it should receiver a token when authenticated", async ({
  assert,
  client
}) => {
  const user = await Factory.model("App/Models/User").create({
    password: "abc123"
  });

  const response = await client
    .post("/session")
    .send({
      email: user.email,
      password: "abc123"
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body.token);
});
