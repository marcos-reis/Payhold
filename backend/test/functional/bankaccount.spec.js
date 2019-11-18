const { test, trait, ...suite } = use("Test/Suite")("Accounts");
const Factory = use("Factory");
trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("It should register a new user account", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  const bankaccount = await Factory.model("App/Models/BankAccount").make();
  const response = await client
    .post("/bankaccounts")
    .loginVia(user, "jwt")
    .send({
      cod: bankaccount.cod,
      bank: bankaccount.bank,
      account: bankaccount.account,
      agency: bankaccount.agency,
      user_id: user.id
    })
    .end();
  response.assertStatus(200);
  assert.exists(response.body.bankaccount);
});

test("It should list all account of a user", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  await Factory.model("App/Models/BankAccount").create({
    user_id: user.id
  });
  await Factory.model("App/Models/BankAccount").create({
    user_id: user.id
  });

  const response = await client
    .get(`/bankaccounts/${user.id}`)
    .loginVia(user)
    .end();

  response.assertStatus(200);
  assert.exists(response.body.bankaccounts);
});
