const Mail = use('Mail')
const User = use('App/Models/User')

class ForgotpasswordController {
  async store ({ request }) {
    const { email } = request.all()
    const user = await User.findBy('email', email)
    await Mail.send('emails.forgotpassword', user.toJSON(), (message) => {
      message
        .to(user.email, user.shortname)
        .from('contato@payhold.com.br', 'Payhold')
        .subject('Payhold - Recuperação de Senha')
    })
  }
}

module.exports = ForgotpasswordController
