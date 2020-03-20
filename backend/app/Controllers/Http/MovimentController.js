/* eslint-disable no-return-assign */
const Cashback = use("App/Models/Cashback");
const Transfer = use("App/Models/Transfer");
const OrderCashBack = use("App/Models/Ordercashback");

class MovimentController {
	async index({ response, auth }) {
		const { id } = await auth.getUser();

		let cashback = await Cashback.query()
			.where("user_id", "=", id)
			.fetch();
		let transfer = await Transfer.query()
			.where("user_id", "=", id)
			.fetch();
		let order = await OrderCashBack.query()
			.where("user_id", "=", id)
			.fetch();
		cashback = cashback.toJSON();
		transfer = transfer.toJSON();
		order = order.toJSON();
		let moviments = [];
		moviments = cashback.concat(order, transfer);

		let valueBalance = 0;
		let valueCash = 0;
		let valueTransfer = 0;
		cashback.map((cash) => (cash.confirmed === 1 ? valueCash += cash.value : 0));
		transfer.map((transf) => (transf.confirmed === 1 ? valueTransfer += transf.value : 0));
		valueBalance = valueCash - valueTransfer;

		return response.status(200).json({ moviments, valueBalance });
	}
}

module.exports = MovimentController;
