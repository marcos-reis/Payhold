const { test, trait, ...suite } = use("Test/Suite")("Accounts");
const Factory = use("Factory");
const Helpers = use("Helpers");

trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("It should register a new bank account", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  const bankaccount = await Factory.model("App/Models/BankAccount").make();
  const response = await client
    .post("/bankaccounts")
    .loginVia(user, "jwt")
    .field('cod', bankaccount.cod)
    .field('bank', bankaccount.bank)
    .field('account', bankaccount.account)
    .field('agency', bankaccount.agency)
    .field('user_id', user.id)
    .attach('thumbnail', Helpers.tmpPath('../uploads/Inter.png'))
    .end();
    console.log(response.text)
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
