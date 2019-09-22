"use strict";
const Account = use("App/Models/Account");
class AccountController {
  async store({ request }) {
    const { cod, bank, agency, account, owner } = request.all();
    const bankaccount = await Account.create({
      cod,
      bank,
      agency,
      account,
      owner
    });
    return { bankaccount };
  }
}

module.exports = AccountController;
