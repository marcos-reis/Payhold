/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use("Route");
const Helpers = use("Helpers");
// const Drive = use("Drive");

Route.get("/", () => ({ message: process.env.NODE_ENV }));
Route.get("/files/:thumbnail", ({ request, response }) => {
  const { thumbnail } = request.params;
  response.download(Helpers.resourcesPath(`../uploads/${thumbnail}`));
});

Route.get("/postback", "OrdercashbackController.store");
Route.post("/sessions", "SessionController.store");
Route.put("/sessions", "SessionController.update");
Route.post("/forgotpassword", "ForgotPasswordController.store");
Route.post("/resetpassword", "ResetpasswordController.store");
Route.post("/users", "UserController.store");

Route.group(() => {
  Route.post("/bankaccounts", "BankAccountController.store");
  Route.get("/bankaccounts/:id", "BankAccountController.show");
  Route.put("/bankaccounts/:id", "BankAccountController.update");
  Route.delete("/bankaccounts/:id", "BankAccountController.destroy");

  Route.get("/users", "UserController.index");
  Route.get("/users/:id", "UserController.show");
  Route.put("/users/:id", "UserController.update");
  Route.delete("/users/:id", "UserController.destroy");

  Route.post("/cashbacks", "CashbackController.store");
  Route.get("/cashbacks/:id", "CashbackController.show");

  Route.post("/transfers", "TransferController.store");
  Route.get("/transfers/:id", "TransferController.show");
  Route.get("/transfers", "TransferController.index");
  Route.put("/transfers/:id", "TransferController.update");

  Route.post("/partners", "PartnerController.store");
  Route.get("/partners", "PartnerController.index");
  Route.get("/partners/:id", "PartnerController.show");

  Route.post("/category-partners", "CategorypartnerController.store");
  Route.get("/category-partners", "categorypartnerController.index");
}).middleware("auth");
