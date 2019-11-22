/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");
const Helpers = use("Helpers");
//const Drive = use("Drive");


Route.get("/", () => {
  return { message: process.env.NODE_ENV };
});
Route.get("/files/:thumbnail", ({ request, response }) => {
  const thumbnail = request.params.thumbnail;
  response.download(Helpers.resourcesPath(`../uploads/${thumbnail}`));
});

Route.post("/sessions", "SessionController.store").validator("Session");
Route.post("/users", "UserController.store");
Route.post("/partners", "PartnerController.store");
Route.post("/category-partners", "CategorypartnerController.store");

Route.get("/users", "UserController.index");

Route.group(() => {
  Route.post("/bankaccounts", "BankAccountController.store");

  Route.post("/financials", "FinancialController.store");
  Route.get("/financials/:id", "FinancialController.show");

  Route.get("/users/:id", "UserController.show");

  Route.get("/bankaccounts/:id", "BankAccountController.show");

  Route.delete("/users/:id", "UserController.delete");

  Route.post("/transactions","TransactionController.store")

  Route.post("/cashbacks","CashbackController.store")

  Route.post("/transfers","TransferController.store")

  Route.post("/request-transfers","RequestTransferController.store")

}).middleware("auth");

Route.get("/category-partners", "categorypartnerController.index");
Route.get("/partners", "PartnerController.index");
Route.get("/partners/:id", "PartnerController.show");
