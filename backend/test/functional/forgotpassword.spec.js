
const {
  test,
  trait,
  beforeEach,
  afterEach,
} = use("Test/Suite")("Forgotpassword");

const Factory = use("Factory");
const Mail = use("Mail");
const Database = use("Database");
const { subHours, format } = require("date-fns");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");


trait("Test/ApiClient");
trait("Auth/Client");
trait("DatabaseTransactions");
beforeEach(async () => {
  Mail.fake();
});
afterEach(async () => {
  Mail.restore();
});

test("It should send a new email with a token for reset a password", async ({ assert, client }) => {
  const email = "marcos@payhold.com.br";
  const user = await Factory.model("App/Models/User").create({ email });
  const response = await client.post("/forgotpassword").send({ email: user.email }).end();
  const token = await user.tokens().first();

  const recentEmail = Mail.pullRecent();

  assert.equal(recentEmail.message.to[0].address, user.email);


  assert.include(token.toJSON(), {
    user_id: user.id,
    type: "forgotpassword",
  });

  assert.equal(response.status, 204);
}).timeout(0);

test("It should be able of reset a password", async ({ assert, client }) => {
  const email = "marcos@payhold.com.br";
  const user = await Factory.model("App/Models/User").create({ email, password: "123455" });
  const userToken = await Factory.model("App/Models/Token").make();
  await user.tokens().save(userToken);

  const response = await client.post("/resetpassword").send({
    token: userToken.token,
    password: "123456",
    passwordConfirmation: "123456",
  }).end();

  await user.reload();
  const checkPassword = await Hash.verify("123456", user.password);
  assert.isTrue(checkPassword);
  assert.equal(response.status, 204);
}).timeout(0);

test("It not should reset a password with a token 2h after the create", async ({ assert, client }) => {
  const email = "marcos@payhold.com.br";
  const user = await Factory.model("App/Models/User").create({ email });
  const tokenUser = await Factory.model("App/Models/Token").make();
  await user.tokens().save(tokenUser);
  const dateWithSub = format(subHours(new Date(), 2), "yyyy-MM-dd HH:ii:ss");
  await Database.table("tokens").where("token", tokenUser.token).update("created_at", dateWithSub);
  const response = await client.post("/resetpassword").send({
    token: tokenUser.token,
    password: "123456",
    passwordConfirmation: "123456",
  }).end();
  assert.equal(response.status, 403);
}).timeout(0);
