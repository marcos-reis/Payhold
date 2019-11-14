const { test, trait, ...suite } = use("Test/Suite")("Categorypartner");
const Factory = use("Factory");
trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test('it should register categories of Partners', async ({ assert,client }) => {
  const user = await Factory.model("App/Models/User").create();
   const partner = await Factory.model("App/Models/Partner").create();
  const response = await client
  .post("/categorypartner")
  .loginVia(user)
  .send({
    category:"Sport",
    percentage:"15%",
    partner_id:partner.id,
  })
  .end();
response.assertStatus(200);
console.log(response.body.category)
assert.exists(response.body.category);
})
