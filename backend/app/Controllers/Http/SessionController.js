/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");

class SessionController {
	async store({ auth, request }) {
		const { email, password, withRefreshToken } = request.all();
		const data = request.only(["email", "password"]);
		const rules = {
			email: "required|email",
			password: "required",
		};

		const validation = await validateAll(data, rules);

		if (validation.fails()) {
			return validation.messages();
		}

		try {
			if (withRefreshToken === true) {
				const { token, refreshToken } = await auth.withRefreshToken().attempt(email, password);
				return { token, refreshToken };
			}
			const { token } = await auth.attempt(email, password);
			return { token };
		} catch (error) {
			return { message: "Email ou senha inválido." };
		}
	}

	async update({ auth, request }) {
		const { refreshToken } = request.all();

		const token = await auth.generateForRefreshToken(refreshToken);
		return token;
	}

	async show({ request, auth }) {
		const { owner } = request.all();
		const { id } = await auth.getUser();

		if (owner) {
			return id;
		}
		return "Not authorized";
	}
}

module.exports = SessionController;
