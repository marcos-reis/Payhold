/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use("Validator");
const Helpers = use("Helpers");
const Drive = use("Drive");
const Partner = use("App/Models/Partner");
const Env = use("Env");
const env = Env.get("NODE_ENV");

class PartnerController {
	async store({ request, response }) {
		const file = request.file("thumbnail", {
			types: ["image"],
			size: "2mb",
		});

		const data = request.only(["name",
			"url",
			"category",
			"percentage",
			"description",
			"theme"]);
		const {
			name, description, url, category, percentage, theme,
		} = request.all();
		const rules = {
			name: "required",
			category: "required",
			percentage: "required",
			theme: "required",
		};
		// eslint-disable-next-line no-unused-vars
		const newName = name.replace(" ", "");
		const fileRenamed = `${newName.toLowerCase()}.${file.subtype}`;
		await file.move(Helpers.tmpPath("../uploads"), {
			name: fileRenamed,
			overwrite: true,
		});

		if (!file.moved()) {
			return file.error();
		}
		const validation = await validateAll(data, rules);
		if (validation.fails()) {
			return response.status(401).json(validation.messages());
		}
		if (env === "testing") {
			await Drive.delete(`../uploads/${fileRenamed}`);
		}
		const thumbnail = `${file.fileName}`;

		const partners = await Partner.create({
			name,
			description,
			category,
			percentage,
			url,
			thumbnail,
			theme,
		});

		return partners;
	}

	async index() {
		const partners = await Partner.query()
			.select("*")
			.with("categories")
			.fetch();
		return partners;
	}

	async show({ request }) {
		const { id } = request.params;
		const partner = await Partner.find(id);

		return partner;
	}
}

module.exports = PartnerController;
