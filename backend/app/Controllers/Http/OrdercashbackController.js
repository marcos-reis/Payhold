const Ordercashback = use("App/Models/Ordercashback");
const Cashback = use("App/Models/Cashback");

class OrdercashbackController {
  async store({ request, response }) {
    const data = request.all();
    if (!data) { return response.status(403).json({ message: "forbidden" }); }
    const orders = await Ordercashback.create(data);
    // eslint-disable-next-line no-console
    // console.log(orders.$attributes);
    return {};
  }

  async update({ params }) {
    const { id } = params;
    const order = await Ordercashback.find(id);
    const cash = await Cashback.create({ user_id: order.id, description: "Cashback", value: 10.5 });

    return { cash };
  }
}

module.exports = OrdercashbackController;
