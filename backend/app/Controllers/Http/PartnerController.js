/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");

const Partner = use("App/Models/Partner");
class PartnerController {
  async store({ request, response }) {
    const data = request.only(["name", "category", "percentage"]);
    const rules = {
      name: "required|unique:partners,name",
      category: "required",
      percentage: "required"
    };
    const validation = await validateAll(data, rules);
    if (validation.fails()) {
      return validation.messages();
    }

    const partner = await Partner.create(data);
    return { partner };
  }
  async index({ request, response }) {
    const partners = await Partner.all();
    return { partners };
  }
  async show({ request, response }) {
    const { id } = request.params;
    const partner = await Partner.find(id);
    return { partner };
  }
}

module.exports = PartnerController;
