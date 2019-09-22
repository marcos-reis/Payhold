"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

class SessionController {
  async store({ auth, request }) {
    const { email, password } = request.all();
    const { token } = await auth.attempt(email, password);
    return { token };
  }
}

module.exports = SessionController;
