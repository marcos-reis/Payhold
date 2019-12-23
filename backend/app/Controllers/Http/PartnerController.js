/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use('Validator')
const Helpers = use('Helpers')
const Drive = use('Drive')

const Partner = use('App/Models/Partner')
class PartnerController {
  async store ({ request, response }) {
    const file = request.file('thumbnail', {
      types: ['image'],
      size: '2mb'
    })

    var data = request.only(['name', 'url', 'category', 'percentageAverage', 'description', 'theme'])
    var { name, description, url, category, percentageAverage, theme } = request.all()
    const rules = {
      name: 'required',
      category: 'required',
      percentageAverage: 'required',
      theme: 'required'
    }

    const fileRenamed = `${new Date().getTime() + name.toLowerCase()}.${file.subtype}`

    await file.move(Helpers.tmpPath('../uploads'), {
      name: fileRenamed,
      overwrite: true
    })

    if (!file.moved()) {
      return file.error()
    }
    const validation = await validateAll(data, rules)
    if (validation.fails()) {
      return response.status(401).json(validation.messages())
    }

    const removed = await Drive.delete(`../uploads/${fileRenamed}`)

    const thumbnail = `${file.fileName}`

    const partner = await Partner.create({
      name,
      description,
      category,
      percentageAverage,
      url,
      thumbnail,
      theme
    })
    return { partner, removed, fileRenamed }
  }

  async index ({ request, response }) {
    const partners = await Partner.query()
      .select('*')
      .with('categories')
      .fetch()
    return { partners }
  }

  async show ({ request, response }) {
    const { id } = request.params
    const partner = await Partner.find(id)

    return { partner }
  }
}

module.exports = PartnerController
