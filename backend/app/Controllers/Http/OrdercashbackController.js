const Ordercashback = use("App/Models/Ordercashback");

class OrdercashbackController {
	async store({ request, response }) {
		const {
			user_id, partnersId, orderNumber, valueTotal, commissTotal,
		} = request.all();
		const data = request.all();

		if (!data) { return response.status(403).json({ message: "forbidden" }); }

		const order = await Ordercashback.create({
			user_id: (user_id * 1),
			partnersId: (partnersId * 1),
			orderNumber: (orderNumber * 1),
			valueTotal: (valueTotal * 1),
			commissTotal: (commissTotal * 1),
			valueCashback: (commissTotal * 0.75),
			percentCashback: ((commissTotal * 0.75) / valueTotal),
			description: "Pedido",

		});

		return { order };
	}
}

module.exports = OrdercashbackController;
