"use strict";
const BankAccount = use("App/Models/BankAccount");
const User = use("App/Models/User");
class BankAccountController {
	async store({ request, response }) {
		const { cod, bank, agency, account, user_id } = request.all();

		if (!cod || !bank || !agency || !account || !user_id) {
			return response.status(401).json({ mensage: "Enter valid data user." });
		}
		const listbankaccountfetch = await BankAccount.query()
			.where("user_id", user_id)
			.where("account", account)
			.fetch();
		const listbankaccount = listbankaccountfetch.toJSON();

		if (!!listbankaccount[0]) {
			if (listbankaccount[0].account) {
				return response
					.status(401)
					.json({ message: "Bankaccount already exists." });
			}
		}

		const bankaccount = await BankAccount.create({
			cod,
			bank,
			agency,
			account,
			user_id
		});
		return response.status(200).json({ bankaccount });
	}
	async show({ request, response }) {
		const { id } = request.params;

		const bankaccounts = await User.query()
			.select("id", "fullname")
			.where("id", id)
			.with("accounts")
			.fetch();
		return response.status(200).json({ bankaccounts });
	}
}

module.exports = BankAccountController;
