'use strict'
const RequestTransfer = use("App/Models/RequestTransfer");

class RequestTransferController {
  async store({ request, response }) {
    const data = await request.only([
      "value",
      "user_id",
      "description"
    ]);

    const RequestTransfers = await RequestTransfer.create(data);
    return { RequestTransfers };
  }
}

module.exports = RequestTransferController
