'use strict'
const Transfer = use("App/Models/Transfer");

class TransferController {
  async store({ request, response }) {
    const data = await request.only([
      "value",
      "user_id",
      "description"
    ]);

    const Transfers = await Transfer.create(data);
    return { Transfers };
  }
}

module.exports = TransferController
