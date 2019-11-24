'use strict'
const Transfer = use('App/Models/Transfer')

class TransferController {
  async store ({ request, response }) {
    const data = await request.only([
      'value',
      'user_id',
      'description',
      'account_id'
    ])

    const Transfers = await Transfer.create(data)
    return { Transfers }
  }

  async show ({ request }) {
    const { id } = request.params
    const Transfers = await Transfer.query()
      .select('*')
      .where('id', id)
      .fetch()
    return { Transfers }
  }
}

module.exports = TransferController
