const Financial = use("App/Models/Financial");
class FinancialController {
  async store({ request, response }) {
    const data = await request.only([
      "valor",
      "account_id",
      "partner_id",
      "user_id",
      "operacao",
      "descricao"
    ]);

    const financial = await Financial.create(data);
    return { financial };
  }
}

module.exports = FinancialController;
