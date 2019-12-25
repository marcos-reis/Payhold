const Ordercashback = use("App/Models/Ordercashback");

class OrdercashbackController {
  async store({ request }) {
    const data = request.all();
    console.log(data);
    return {};
  }
}

module.exports = OrdercashbackController;
