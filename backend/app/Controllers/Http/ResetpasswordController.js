const Token = use("App/Models/Token");
const { parseISO, isBefore, subHours } = require("date-fns");

class ResetpasswordController {
  async store({ request, response }) {
    const { token, password, passwordConfirmation } = request.all();

    if (!password || !passwordConfirmation || password !== passwordConfirmation) {
      return response.status(403).json({ message: "Forbidden" });
    }

    const tokenUser = await Token.findBy("token", token);
    // console.log(isBefore(parseISO(tokenUser.created_at), subHours(new Date(), 2)));
    if (isBefore(parseISO(tokenUser.created_at), subHours(new Date(), 2))) {
      return response.status(403).json({ message: "Forbidden" });
    }

    const user = await tokenUser.user().fetch();
    user.password = password;
    await user.save();

    return response.status(204).json({ message: "success" });
  }
}

module.exports = ResetpasswordController;
