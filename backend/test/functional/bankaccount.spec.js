const { test, trait, ...suite } = use("Test/Suite")("Accounts");
const Factory = use("Factory");
Factory.trait("Test/ApiClient");
trait("DatabaseTransactions");

const User = use("App/Models/User");
const BankAccount = use("App/Models/BankAccount");

test("It should register a new user account", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  const bankaccount = await Factory.model("App/Models/BankAccount").make();
  const response = await client
    .post("/bankaccount")
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
  await Factory.model("App/Models/BankAccount").create({ user_id: user.id });
  await Factory.model("App/Models/BankAccount").create({ user_id: user.id });

  const response = await client.get(`/bankaccount/${user.id}`).end();
  response.assertStatus(200);
  assert.exists(response.body.bankaccounts);
});
