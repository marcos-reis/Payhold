/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");

const User = use("App/Models/User");
const BankAccount = use("App/Models/BankAccount");

class BankAccountController {
  async store({ request, response }) {
    const data = request.only(["cod", "bank", "agency", "account", "user_id"]);

    const rules = {
      cod: "required",
      bank: "required",
      agency: "required",
      account: "required|unique:accounts,account",
      user_id: "required"
    };
    const validation = await validateAll(data, rules);

    if (validation.fails()) {
      return validation.messages();
    }

    const bankaccount = await BankAccount.create(data);

    return { bankaccount };
  }
  async show({ request, response }) {
    const { id } = request.params;

    const bankaccounts = await User.query()
      .select("id", "fullname")
      .where("id", id)
      .with("accounts")
      .fetch();
    return response.status(200).json({ bankaccounts });
  }
}

module.exports = BankAccountController;
