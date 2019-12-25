const Cashback = use("App/Models/Cashback");
const Ordercashback = use("App/Models/Ordercashback");

class CashbackController {
  async store({ params }) {
    const { id } = params;
    const order = await Ordercashback.find(id);
    const cash = await Cashback.create({ user_id: order.id, description: "Cashback", value: 10.5 });

    return { cash };
  }

  async show({ request }) {
    const { id } = request.params;
    const Cashbacks = await Cashback.query()
      .select("*")
      .where("id", id)
      .fetch();
    return { Cashbacks };
  }
}

module.exports = CashbackController;
