'use strict'
const { validateAll } = use('Validator')
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
    return Transfers
  }

  async index ({ request }) {
    const Transfers = await Transfer.query()
      .select('*')
      .fetch()
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

  async update ({ request }) {
    const data = await request.only([
      'confirmed',
      'description'
    ])
    const rules = {
      description: 'required',
      confirmed: 'required'
    }
    const validation = await validateAll(data, rules)
    if (validation.fails()) {
      return validation.messages()
    }

    const { id } = request.params
    const Transfers = await Transfer.findOrFail(id)
    await Transfers.merge(data)
    await Transfers.save()

    return Transfers
  }
}

module.exports = TransferController
