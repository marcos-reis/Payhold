const { test, trait } = use("Test/Suite")("Ordercashback");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("it should created orders of cashback", async ({ client }) => {
  const response = await client.get("/postback?codigoTransacao={transaction}&anuncianteId={adv}&user_id=1").end();
  response.assertStatus(200);
}).timeout(0);
