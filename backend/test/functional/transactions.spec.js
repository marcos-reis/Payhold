'use strict'

const { test, trait, ...suite }  = use('Test/Suite')('Transactions')
const Factory = use("Factory");

trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("it should include cashback in account", async ({ assert, client }) => {
  const user = await Factory.model("App/Models/User").create();
  const partner = await Factory.model("App/Models/Partner").create();
  const bankaccount = await Factory.model("App/Models/BankAccount").create();

  const financial = await Factory.model("App/Models/Financial").make({});

  const response = await client
    .post("/transactions")
    .loginVia(user)
    .send({
      user_id: user.id,
      account_id: bankaccount.id,
      partner_id:partner.id,
      operation: financial.operation,
      description: financial.description,
      value: financial.value
    })
    .end();
    console.log(response.text)
  response.assertStatus(200);
});


