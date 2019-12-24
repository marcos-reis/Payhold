const Categorypartner = use('App/Models/Categorypartner');

class CategorypartnerController {
  async store({ request }) {
    const data = await request.only([
      'category',
      'percentage',
      'partner_id',
    ]);

    const category = await Categorypartner.create(data);
    return { category };
  }

  async index() {
    const category = await Categorypartner
      .query()
      .select('*')
      .fetch();

    return { category };
  }
}

module.exports = CategorypartnerController;
