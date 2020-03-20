const { test, trait } = use("Test/Suite")("Ordercashback");

trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

const Factory = use("Factory");

test("it should created orders of cashback", async ({ client }) => {
	const user = await Factory.model("App/Models/User").create();
	const partner = await Factory.model("App/Models/Partner").create();
	const order = await Factory.model("App/Models/Ordercashback").make({ user_id: user.id, partnersId: partner.id });

	const response = await client.get(`/postback?orderNumber=${order.orderNumber}&partnersId=${order.partnersId}&user_id=${order.user_id}&valueTotal=${order.valueTotal}&commissTotal=${order.commissTotal}`).end();
	response.assertStatus(200);
}).timeout(0);
