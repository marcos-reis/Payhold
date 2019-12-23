class UserRegistration {
  async sendVerificationEmail (user) {
    await Mail.send('emails.verify', user, (message) => {
      message.to(user.email)
      message.subject('Verify account')
    })
  }
}
