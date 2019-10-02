/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");

class SessionController {
  async store({ auth, request }) {
    const { email, password } = request.all();
    const data = request.only(["email", "password"]);
    const rules = {
      email: "required|email",
      password: "required"
    };

    const validation = await validateAll(data, rules);

    if (validation.fails()) {
      return response.status(401).json(validation.messages())
    }

    const { token } = await auth.attempt(email, password);
    return { token };
  }
}

module.exports = SessionController;
