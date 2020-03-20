/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const User = use("App/Models/User");

class UserController {
	async store({ request, response }) {
		const {
			fullname, email, cpf, password,
		} = request.all();

		function validationEmail(field) {
			const usuario = field.substring(0, field.indexOf("@"));
			const dominio = field.substring(field.indexOf("@") + 1, field.length);

			if (!((usuario.length >= 1)
          && (dominio.length >= 3)
          && (usuario.search("@") === -1)
          && (dominio.search("@") === -1)
          && (usuario.search(" ") === -1)
          && (dominio.search(" ") === -1)
          && (dominio.search(".") !== -1)
          && (dominio.indexOf(".") >= 1)
          && (dominio.lastIndexOf(".") < dominio.length - 1))) {
				return response.json({ message: "Email inválido" });
			}
		}
		validationEmail(email);

		const firstName = fullname.split(" ")[0];
		const lastName = fullname.split(" ").splice(-1)[0];

		const shortname = `${firstName} ${lastName}`;

		if (!email || !password || !cpf) {
			return response.json({ message: "Há dados importantes faltando" });
		}
		if (password.length < 6) {
			return response.json({ message: "Senha muito curta" });
		}
		const Email = await User.findBy("email", email);
		const Cpf = await User.findBy("cpf", cpf);

		if (Email || Cpf) {
			return response.json({ message: "Email/Cpf Inválido" });
		}

		/* if (email) {
      return response.json({ message: "Validação de email" });
    }
    */

		const user = await User.create({
			fullname, email, cpf, password, shortname, profile: 3,
		});
		return { user };
	}

	async index({ auth, response }) {
		const users = await User.all();
		if (auth.user.profile === 3) {
			return response.status(403).json({ message: "Forbidden" });
		}

		return { users };
	}

	async show({
		auth, request, response,
	}) {
		const { owner } = request.all();
		let id;
		owner ? id = auth.user.id : id = request.params.id;

		if (auth.user.profile === 3) {
			if (auth.user.id !== parseInt(id, 10)) {
				return response.status(403).json({ message: "Forbidden" });
			}
		}

		const user = await User.query()
			.select("*")
			.where("id", id)
			.with("accounts")
			.with("cashbacks")
			.with("transfers")
		// .with('requestTransfers')
			.fetch();
		return { user };
	}

	async update({
		auth, params, request, response,
	}) {
		const { id } = await request.params;
		if (auth.user.profile === 3) {
			if (auth.user.id !== parseInt(params.id, 10)) {
				return response.status(403).json({ message: "Forbidden" });
			}
		}
		if (auth.user.profile === 2) {
			if (auth.user.id !== parseInt(params.id, 10)) {
				return response.status(403).json({ message: "Forbidden" });
			}
		}
		const data = request.only(["fullname",
			"email",
			"cpf",
			"password"]);
		const user = await User.find(id);
		await user.merge(data);
		await user.save();
		return { user };
	}

	async destroy({
		auth, params, request, response,
	}) {
		const { id } = await request.params;
		if (auth.user.profile === 3) {
			if (auth.user.id !== parseInt(params.id)) {
				return response.status(403).json({ message: "Forbidden" });
			}
		}
		if (auth.user.profile === 2) {
			if (auth.user.id !== parseInt(params.id)) {
				return response.status(403).json({ message: "Forbidden" });
			}
		}
		const user = await User.find(id);
		await user.delete();
	}
}

module.exports = UserController;
