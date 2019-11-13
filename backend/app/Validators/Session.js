"use strict";

class CommonUser {
  get rules() {
    return {
      email: "required",
      password: "required"
    };
  }
  get messages() {
    return {
      "email.required": "You must provide a email",
      "password.required": "You must provide a email"
    };
  }
}

module.exports = CommonUser;
