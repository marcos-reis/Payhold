/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");

const User = use("App/Models/User");

class UserController {
  async store({ request }) {
    const data = request.only(["fullname", "email", "cpf", "password"]);

    const rules = {
      email: "required|email|unique:users,email",
      password: "required|min:6",
      cpf: "required|min:14|max:14"
    };

    const validation = await validateAll(data, rules);
    if (validation.fails()) {
      return validation.messages();
    }

    const user = await User.create(data);
    return { user };
  }
}

module.exports = UserController;
