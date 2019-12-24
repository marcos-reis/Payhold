
const { validateAll } = use('Validator');
const Transfer = use('App/Models/Transfer');

class TransferController {
  async store({ request }) {
    const {
      value, user_id, description, account_id,
    } = await request.all();

    const newValue = value * (-1);

    const Transfers = await Transfer.create({
      value: newValue, user_id, description, account_id,
    });
    return Transfers;
  }

  async index() {
    const Transfers = await Transfer.query()
      .select('*')
      .fetch();
    return { Transfers };
  }

  async show({ request }) {
    const { id } = request.params;
    const Transfers = await Transfer.query()
      .select('*')
      .where('id', id)
      .fetch();
    return { Transfers };
  }

  async update({ request }) {
    const data = await request.only([
      'confirmed',
      'description',
    ]);
    const rules = {
      description: 'required',
      confirmed: 'required',
    };
    const validation = await validateAll(data, rules);
    if (validation.fails()) {
      return validation.messages();
    }

    const { id } = request.params;
    const Transfers = await Transfer.findOrFail(id);
    await Transfers.merge(data);
    await Transfers.save();

    return Transfers;
  }
}

module.exports = TransferController;
