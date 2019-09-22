"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use("App/Models/User");

class UserController {
  async store({ request }) {
    const {
      fullname,
      shortname,
      email,
      cpf,
      saldo = "0",
      rendimento = "0",
      extrato = "Em breve",
      password
    } = request.all();
    const user = await User.create({
      fullname,
      shortname,
      email,
      cpf,
      saldo,
      rendimento,
      extrato,
      password
    });
    return { user };
  }
}

module.exports = UserController;
