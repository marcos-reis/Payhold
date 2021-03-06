const { test, trait } = use("Test/Suite")("Partners");
const Factory = use("Factory");
const Helpers = use("Helpers");

trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");

test("It should register a new partner", async ({ client }) => {
  const user = await Factory.model("App/Models/User").create();
  const partner = await Factory.model("App/Models/Partner").make();

  const response = await client
    .post("/partners")
    .loginVia(user)
    .field("name", partner.name)
    .field("description", partner.description)
    .field("category", partner.category)
    .field("percentage", partner.percentage)
    .field("url", partner.url)
    .field("theme", partner.theme)
    .attach("thumbnail", Helpers.tmpPath("../assets/Inter.png"))
    .end();
  response.assertStatus(200);
}).timeout(0);

test("It should list all partners", async ({ client }) => {
  const user = await Factory.model("App/Models/User").create();
  await Factory.model("App/Models/Partner").createMany(2);
  const response = await client.get("/partners").loginVia(user).end();
  response.assertStatus(200);
}).timeout(0);

test("It should list a only partner, specified by ID", async ({ client }) => {
  const user = await Factory.model("App/Models/User").create();
  const partner = await Factory.model("App/Models/Partner").create();
  const response = await client.get(`/partners/${partner.id}`).loginVia(user).end();
  response.assertStatus(200);
}).timeout(0);
