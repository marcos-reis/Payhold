
const Cashback = use('App/Models/Cashback');

class CashbackController {
  async store({ request }) {
    const data = await request.only([
      'value',
      'partner_id',
      'user_id',
      'description',

    ]);

    const Cashbacks = await Cashback.create(data);
    return { Cashbacks };
  }

  async show({ request }) {
    const { id } = request.params;
    const Cashbacks = await Cashback.query()
      .select('*')
      .where('id', id)
      .fetch();
    return { Cashbacks };
  }
}

module.exports = CashbackController;
