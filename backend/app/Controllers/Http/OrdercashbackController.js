const Ordercashback = use("App/Models/Ordercashback");

class OrdercashbackController {
  async store({ request }) {
    const data = request.all();
    console.log(data);
    const Orders = await Ordercashback.create(data);
    console.log(Orders.$attributes);
    return {};
  }
}

module.exports = OrdercashbackController;
