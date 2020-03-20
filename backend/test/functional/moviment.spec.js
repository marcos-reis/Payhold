const { test, trait } = use("Test/Suite")("Moviment");
const Factory = use("Factory");
trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("make sure 2 + 2 is 4", async ({ client }) => {
	const user = await Factory.model("App/Models/User").create();
	const partners = await Factory.model("App/Models/Partner").create();

	await Factory.model("App/Models/Ordercashback").create({ user_id: user.id, partnersId: partners.id });
	await Factory.model("App/Models/Ordercashback").create({ user_id: user.id, partnersId: partners.id });

	await Factory.model("App/Models/Cashback").create({ user_id: user.id, partner_id: partners.id });
	await Factory.model("App/Models/Cashback").create({ user_id: user.id, partner_id: partners.id });

	await Factory.model("App/Models/Transfer").create({ user_id: user.id, account_id: partners.id });
	await Factory.model("App/Models/Transfer").create({ user_id: user.id, account_id: partners.id });

	const response = await client
		.get("/moviment")
		.loginVia(user)
		.end();
	response.assertStatus(200);
});
