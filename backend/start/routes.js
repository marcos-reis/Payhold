/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");
const Helpers = use("Helpers");
//const Drive = use("Drive");

Route.get("/", () => {
  return { message: "Welcome the api payhold " };
});
Route.get("/files/:thumbnail", ({ request, response }) => {
  const thumbnail = request.params.thumbnail;
  response.download(Helpers.resourcesPath(`../uploads/${thumbnail}`));
});

Route.post("/session", "SessionController.store").validator("Session");
Route.post("/user/store", "UserController.store");
Route.post("/partner", "PartnerController.store");
Route.post("/categorypartner", "CategorypartnerController.store");

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
