const Cashback = use("App/Models/Cashback");
const Ordercashback = use("App/Models/Ordercashback");

class CashbackController {
	async store({ params }) {
		const { id } = await params;
		const order = await Ordercashback.findBy("orderNumber", id);
		const cash = await Cashback.create({
			user_id: order.user_id,
			partner_id: parseInt(order.partnersId, 10),
			description: "Cashback",
			value: order.valueCashback,
			percent: order.percentCashback,
		});

		return { cash };
	}

	async show({ request }) {
		const { id } = request.params;
		const Cashbacks = await Cashback.query()
			.select("*")
			.where("id", id)
			.fetch();
		return { Cashbacks };
	}
}

module.exports = CashbackController;
