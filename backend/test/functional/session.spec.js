const { test, trait } = use("Test/Suite")("Sessions");
const Factory = use("Factory");

trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("it should receiver a token when authenticated", async ({
	assert,
	client,
}) => {
	const user = await Factory.model("App/Models/User").create({
		password: "abc123",
	});

	const response = await client
		.post("/sessions")
		.send({
			email: user.email,
			password: "abc123",
		})
		.end();
	response.assertStatus(200);
	assert.exists(response.body.token);
}).timeout(0);

test("it should receiver a token of updated", async ({
	assert,
	client,
}) => {
	const user = await Factory.model("App/Models/User").create({
		password: "abc123",
	});

	const response = await client
		.post("/sessions")
		.send({
			email: user.email,
			password: "abc123",
			withRefreshToken: true,
		})
		.end();
	response.assertStatus(200);
	assert.exists(response.body.refreshToken);
}).timeout(0);

test("it should refresh a token ", async ({
	assert,
	client,
}) => {
	const user = await Factory.model("App/Models/User").create({
		password: "abc123",
	});

	const response = await client
		.post("/sessions")
		.send({
			email: user.email,
			password: "abc123",
			withRefreshToken: true,
		})
		.end();

	const response2 = await client
		.put("/sessions")
		.send({
			token: response.body.token,
			refreshToken: response.body.refreshToken,
		})
		.end();
	response.assertStatus(200);
	assert.exists(response2.body.refreshToken, response2.body.token);
}).timeout(0);

test("it should identify a id with a token of authentication", async ({

	client,
}) => {
	const user = await Factory.model("App/Models/User").create();

	const response = await client
		.get("/sessions/0?owner=true")
		.loginVia(user)
		.end();
	response.assertStatus(200);
}).timeout(0);
