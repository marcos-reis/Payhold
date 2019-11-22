'use strict'

const { test, trait, ...suite } = use('Test/Suite')('Request Transfer')

const Factory = use("Factory");

trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test('it should request a transfer for your account', async ({ assert,client }) => {
  const user = await Factory.model("App/Models/User").create();
  const bankaccount = await Factory.model("App/Models/BankAccount").create();
  const requestTransfer = await Factory.model("App/Models/RequestTransfer").make();

  const response = await client
    .post("/request-transfers")
    .loginVia(user)
    .send({
      user_id: user.id,
      account_id: bankaccount.id,
      value: requestTransfer.value
    })
    .end();
  response.assertStatus(200);
})
