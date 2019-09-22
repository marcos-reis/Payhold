"use strict";
const Account = use("App/Models/Account");
const User = use("App/Models/User");
class AccountController {
  async store({ request }) {
    const { cod, bank, agency, account, user_id } = request.all();
    const bankaccount = await Account.create({
      cod,
      bank,
      agency,
      account,
      user_id
    });
    const wantedData = await User.query()
      .where("id", 1)
      .with("accounts")
      .fetch();
    return { bankaccount, wantedData };
  }
}

module.exports = AccountController;
