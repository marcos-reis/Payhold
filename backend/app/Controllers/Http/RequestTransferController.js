'use strict'
const RequestTransfer = use('App/Models/RequestTransfer')

class RequestTransferController {
  async store ({ request, response }) {
    const {
      user_id,
      account_id,
      value
    } = await request.all()

    const RequestTransfers = await RequestTransfer.create({
      user_id,
      account_id,
      value: -value
    })
    return { RequestTransfers }
  }

  async show ({ request }) {
    const { id } = request.params
    const RequestTransfers = await RequestTransfer.query()
      .select('*')
      .where('id', id)
      .fetch()
    return { RequestTransfers }
  }
}

module.exports = RequestTransferController
