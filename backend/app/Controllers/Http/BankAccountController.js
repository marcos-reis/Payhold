/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");

const Helpers = use("Helpers");
const BankAccount = use("App/Models/BankAccount");
const Drive = use("Drive");

class BankAccountController {
  async store({ request, response }) {
    const data = request.only([
      "cod",
      "bank",
      "agency",
      "account",
      "user_id",
    ]);
    const {
      bank, cod, agency, account, user_id,
    } = request.all();

    const rules = {
      cod: "required",
      bank: "required",
      agency: "required",
      account: "required",
      user_id: "required",
    };
    const file = request.file("thumbnail", {
      types: ["image"],
      size: "2mb",
    });
    const validation = await validateAll(data, rules);
    const fileRenamed = `${new Date().getTime() + bank.toLowerCase()}.${file.subtype}`;

    await file.move(Helpers.tmpPath("../uploads"), {
      name: fileRenamed,
      overwrite: true,
    });

    if (!file.moved()) {
      return file.error();
    }
    if (validation.fails()) {
      return response.status(401).json(validation.messages());
    }
    await Drive.delete(`../uploads/${fileRenamed}`);

    const thumbnail = `${file.fileName}`;

    const bankaccounts = await BankAccount.create({
      bank, cod, agency, account, user_id, thumbnail,
    });

    return response.status(200).json({ bankaccounts });
  }

  async show({ request, response }) {
    const { id } = request.params;

    const bankaccounts = await BankAccount.query()
      .select("*")
      .where("user_id", id)
      .fetch();
    return response.status(200).json({ bankaccounts });
  }

  async update({ request }) {
    const data = await request.only([
      "agency", "account",
    ]);

    const { id } = request.params;
    const bankaccounts = await BankAccount.findOrFail(id);
    await bankaccounts.merge(data);
    await bankaccounts.save();
    return { bankaccounts };
  }

  async destroy({ request }) {
    const { id } = request.params;
    const bankaccounts = await BankAccount.findOrFail(id);
    await bankaccounts.delete(id);
    return { deleted: true };
  }
}

module.exports = BankAccountController;
