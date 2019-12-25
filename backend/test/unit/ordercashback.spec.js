const { test, trait } = use("Test/Suite")("Ordercashback");

trait("Test/ApiClient");

test("it should created orders of cashback", async ({ client }) => {
  const response = await client.get("/postback?codigoTransacao={transaction}&anuncianteId={adv}").end();
  response.assertStatus(200);
}).timeout(0);
