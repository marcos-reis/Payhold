"use strict";
const Partner = use("App/Models/Partner");
class PartnerRegisterController {
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
    const partner = await Partner.all();
    return { partner };
  }
}

module.exports = PartnerRegisterController;
