/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");
const Helpers = use("Helpers");

const Partner = use("App/Models/Partner");
class PartnerController {
  async store({ request, response }) {
    const file = request.file("thumbnail", {
      types: ["image"],
      size: "2mb"
    });

    var data = request.only(["name", "category", "percentage"]);
    var { name, category, percentage } = request.all();
    const rules = {
      name: "required",
      category: "required",
      percentage: "required"
    };

    await file.move(Helpers.tmpPath("../uploads"), {
      name: `${new Date().getTime() + name.toLowerCase()}.${file.subtype}`,
      overwrite: true
    });


    if (!file.moved()) {
      return file.error();
    }
    const validation = await validateAll(data, rules);
    if (validation.fails()) {
      return response.status(401).json(validation.messages());
    }

    const thumbnail = `${file.fileName}`;

    const partner = await Partner.create({
      name,
      category,
      percentage,
      thumbnail
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
