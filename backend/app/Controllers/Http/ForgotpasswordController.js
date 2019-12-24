const Mail = use('Mail');
const User = use('App/Models/User');
const Env = use('Env');
const { randomBytes } = require('crypto');
const { promisify } = require('util');

class ForgotpasswordController {
  async store({ request }) {
    const { email } = request.all();
    const user = await User.findBy('email', email);

    const random = await promisify(randomBytes)(12);
    const token = random.toString('hex');
    await user.tokens().create({
      token,
      type: 'forgotpassword',
    });

    const resetPassword = `${Env.get('FRONT_URL')}/reset?token=${token}`;
    await Mail.send('emails.forgotpassword', { user, resetPassword }, (message) => {
      message
        .to(user.email)
        .from('contato@payhold.com.br', 'Payhold')
        .subject('Payhold - Recuperação de Senha');
    });
  }
}

module.exports = ForgotpasswordController;
