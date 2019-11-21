const { test, trait, ...suite } = use("Test/Suite")("FinancialData");
const Factory = use("Factory");
trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("It should create hitory data fake", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  const partner = await Factory.model("App/Models/Partner").create();
  const bankaccount = await Factory.model("App/Models/BankAccount").create();
  const financial = await Factory.model("App/Models/Financial").make({});
  const response = await client
    .post("/financials")
    .loginVia(user)
    .send({
      user_id: user.id,
      account_id: bankaccount.id,
      operation: financial.operation,
      description: financial.description,
      value: financial.value
    })
    .end();
  response.assertStatus(200);
});

test("It should list hitory data fake", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  const partner = await Factory.model("App/Models/Partner").create();
  const bankaccount = await Factory.model("App/Models/BankAccount").create();
  const financial = await Factory.model("App/Models/Financial").create({
    user_id: user.id,
    partner_id:partner.id,
    account_id: bankaccount.id,
  });
  const response = await client
    .get(`/financials/${user.id}`)
    .loginVia(user)
    .end();
  response.assertStatus(200);
});
