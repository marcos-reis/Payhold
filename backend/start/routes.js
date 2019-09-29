/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.post("/session", "SessionController.store").validator("Session");
Route.post("/user/store", "UserController.store");
Route.post("/partner", "PartnerController.store");

Route.get("/user/index", "UserController.index");

Route.group(() => {
  Route.post("/bankaccount", "BankAccountController.store");

  Route.post("/financialdata", "FinancialController.store");

  Route.get("/user/show/:id", "UserController.show");

  Route.get("/bankaccount/:id", "BankAccountController.show");

  Route.delete("/user/delete/:id", "UserController.delete");
}).middleware("auth");

Route.get("/partner", "PartnerController.index");
Route.get("/partner/:id", "PartnerController.show");
