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
    .post("/financialdata")
    .loginVia(user)
    .send({
      user_id: user.id,
      account_id: bankaccount.id,
      operacao: financial.operacao,
      valor: financial.valor
    })
    .end();
  response.assertStatus(200);
});
