/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("/session", "SessionController.store");
Route.post("/user", "UserController.store");
Route.post("/bankaccount", "BankAccountController.store");
Route.post("/partner", "PartnerController.store");

Route.get("/partner", "PartnerController.index");
Route.get("/partner/:id", "PartnerController.show");
Route.get("/bankaccount/:id", "BankAccountController.show");
