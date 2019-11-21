/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");

const Helpers = use("Helpers");
const User = use("App/Models/User");
const BankAccount = use("App/Models/BankAccount");

class BankAccountController {
  async store({ request, response }) {
    const data = request.only(["cod", "bank", "agency", "account", "user_id"]);
    const {bank,cod,agency, account,user_id} = request.all()

    const rules = {
      cod: "required",
      bank: "required",
      agency: "required",
      account: "required|unique:accounts,account",
      user_id: "required"
    };
    const file = request.file("thumbnail", {
      types: ["image"],
      size: "2mb"
    });
    const validation = await validateAll(data, rules);

    await file.move(Helpers.tmpPath("../uploads"), {
      name: `${new Date().getTime() + bank.toLowerCase()}.${file.subtype}`,
      overwrite: true
    });


    if (!file.moved()) {
      return file.error();
    }
    if (validation.fails()) {
      return response.status(401).json(validation.messages())
    }
    const thumbnail = `${file.fileName}`;
    const bankaccount = await BankAccount.create({
      bank,cod,agency, account,user_id,thumbnail
    });

    return response.status(200).json({ bankaccount });
  }
  async show({ request, response }) {
    const { id } = request.params;

    const bankaccounts = await User.query()
      .select("id", "fullname")
      .where("id", id)
      .with("accounts")
      .fetch();
    return response.status(200).json({ bankaccounts });
  }
}

module.exports = BankAccountController;
