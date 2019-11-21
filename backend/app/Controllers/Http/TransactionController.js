'use strict'
const Transaction = use("App/Models/Transaction");

class TransactionController {
  async store({ request, response }) {
    const data = await request.only([
      "value",
      "account_id",
      "partner_id",
      "user_id",
      "operation",
      "description"
    ]);

    const Transactions = await Transaction.create(data);
    return { Transactions };
  }
}

module.exports = TransactionController
