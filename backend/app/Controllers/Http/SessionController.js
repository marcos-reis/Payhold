/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')
const { validateAll } = use('Validator')

class SessionController {
  async store ({ auth, request }) {
    const { email, password } = request.all()
    const data = request.only(['email', 'password'])
    const rules = {
      email: 'required|email',
      password: 'required'
    }

    const validation = await validateAll(data, rules)

    if (validation.fails()) {
      return validation.messages()
    }

    try {
      const { token } = await auth.attempt(email, password)
      return { token }
    } catch (error) {
      return { message: 'Email ou senha inválido.'}
    }
  }
}

module.exports = SessionController
