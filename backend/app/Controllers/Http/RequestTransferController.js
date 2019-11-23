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
  async show({ request }) {
    const { id } = request.params;
    const RequestTransfers = await RequestTransfer.query()
      .select("*")
      .where("id", id)
      .fetch();
    return { RequestTransfers };
  }
}

module.exports = RequestTransferController
