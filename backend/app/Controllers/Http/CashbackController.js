'use strict'
const Cashback = use("App/Models/Cashback");

class CashbackController {
  async store({ request, response }) {
    const data = await request.only([
      "value",
      "partner_id",
      "user_id",
      "operation",
      "description"
    ]);

    const Cashbacks = await Cashback.create(data);
    return { Cashbacks };
  }
}

module.exports = CashbackController
