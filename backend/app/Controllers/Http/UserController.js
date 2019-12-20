/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const { validateAll } = use('Validator')

const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    const data = request.only(['fullname', 'email', 'cpf', 'password'])
    const { fullname, email, cpf, password, profile } = request.all()

    const firstName = fullname.split(' ')[0]
    const lastName = fullname.split(' ').splice(-1)[0]

    const shortname = `${firstName} ${lastName}`

    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required|min:6',
      cpf: 'required'
    }

    const validation = await validateAll(data, rules)
    if (validation.fails()) {
      return validation.messages()
    }

    const user = await User.create({
      fullname, email, cpf, password, shortname, profile
    })
    return { user }
  }

  async index ({ auth, response }) {
    const users = await User.all()
    if (auth.user.profile === 3) {
      return response.status(403).json({ message: 'Forbidden' })
    }

    return { users }
  }

  async show ({ auth, params, request, response }) {
    const { id } = request.params
    if (auth.user.profile === 3) {
      return response.status(403).json({ message: 'Forbidden' })
    }

    const user = await User.query()
      .select('*')
      .where('id', id)
      .with('accounts')
      .with('cashbacks')
      .with('transfers')
      // .with('requestTransfers')
      .fetch()
    return { user }
  }

  async update ({ auth, params, request, response }) {
    const { id } = await request.params
    if (auth.user.profile === 3) {
      if (auth.user.id !== parseInt(params.id)) {
        return response.status(403).json({ message: 'Forbidden' })
      }
    }
    if (auth.user.profile === 2) {
      if (auth.user.id !== parseInt(params.id)) {
        return response.status(403).json({ message: 'Forbidden' })
      }
    }
    const data = request.only(['fullname', 'email', 'cpf', 'password'])
    const user = await User.find(id)
    await user.merge(data)
    await user.save()
    return { user }
  }

  async delete ({ auth, params, request, response }) {
    const { id } = await request.params
    if (auth.user.profile === 3) {
      if (auth.user.id !== parseInt(params.id)) {
        return response.status(403).json({ message: 'Forbidden' })
      }
    }
    if (auth.user.profile === 2) {
      if (auth.user.id !== parseInt(params.id)) {
        return response.status(403).json({ message: 'Forbidden' })
      }
    }
    const user = await User.find(id)
    await user.delete()
  }
}

module.exports = UserController
