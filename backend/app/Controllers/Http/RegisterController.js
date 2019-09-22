"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use("App/Models/User");

class RegisterController {
  async store({ request }) {
    const { fullname, email, cpf, password } = request.all();
    const user = await User.create({ fullname, email, cpf, password });
    return { user };
  }
}

module.exports = RegisterController;
