"use strict";
const Partner = use("App/Models/Partner");
class PartnerController {
  async store({ request, response }) {
    const { name, category, percentage } = request.all();
    const partner = await Partner.create({
      name,
      category,
      percentage
    });
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
