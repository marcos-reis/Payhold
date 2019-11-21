const Financial = use("App/Models/Financial");
class FinancialController {
  async store({ request, response }) {
    const data = await request.only([
      "value",
      "account_id",
      "partner_id",
      "user_id",
      "operation",
      "description"
    ]);

    const financial = await Financial.create(data);
    return { financial };
  }
  async show({ request, response }) {
    const { id } = request.params;

    const financial = await Financial.query()
      .select("*")
      .where("id", id)
      .fetch();
    return response.status(200).json({ financial });
  }
}


module.exports = FinancialController;
