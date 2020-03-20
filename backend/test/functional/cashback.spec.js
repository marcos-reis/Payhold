const { test, trait } = use("Test/Suite")("Cashback");

const Factory = use("Factory");

trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("it should include cashback in account", async ({ client }) => {
	const user = await Factory.model("App/Models/User").create();
	const partner = await Factory.model("App/Models/Partner").create();
	const order = await Factory.model("App/Models/Ordercashback").create({ user_id: user.id, partnersId: partner.id });

	const response = await client
		.post(`/cashbacks/${order.orderNumber}`)
		.loginVia(user)
		.end();

	response.assertStatus(200);
}).timeout(0);

test("it should list all cashback of a user", async ({ client }) => {
	const user = await Factory.model("App/Models/User").create();
	const partner = await Factory.model("App/Models/Partner").create();
	const cashback = await Factory.model("App/Models/Cashback").create({
		user_id: user.id,
		partner_id: partner.id,
	});

	const response = await client
		.get(`/cashbacks/${cashback.id}`)
		.loginVia(user)
		.send({ })
		.end();
	response.assertStatus(200);
}).timeout(0);
