"use strict";
const BankAccount = use("App/Models/BankAccount");
const User = use("App/Models/User");
class BankAccountController {
  async store({ request }) {
    const { cod, bank, agency, account, user_id } = request.all();
    const bankaccount = await BankAccount.create({
      cod,
      bank,
      agency,
      account,
      user_id
    });
    return { bankaccount };
  }
  async show({ request }) {
    const { id } = request.params;

    const bankaccounts = await User.query()
      .select("id", "fullname")
      .where("id", id)
      .with("accounts")
      .fetch();
    return { bankaccounts };
  }
}

module.exports = BankAccountController;
