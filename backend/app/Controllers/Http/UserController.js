/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");

const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    const data = request.only(["fullname", "email", "cpf", "password"]);
    const fullname =request.only(["fullname"])
    const shortname = fullname.fullname.split(" ")
    shortname

    const rules = {
      email: "required|email|unique:users,email",
      password: "required|min:6",
      cpf: "required"
    };

    const validation = await validateAll(data, rules);
    if (validation.fails()) {
      return validation.messages();
    }

    const user = await User.create(data);
    return { user };
  }
  async index() {
    const users = await User.all();
    return { users };
  }
  async show({ request }) {
    const { id } = request.params;
    const user = await User.query()
      .select("*")
      .where("id", id)
      .with("financials")
      .with("accounts")
      .fetch();
    return { user };
  }

  async delete({ request, response }) {
    const { id } = await request.params;
    const user = await User.find(id);
    await user.delete();
  }
}

module.exports = UserController;
