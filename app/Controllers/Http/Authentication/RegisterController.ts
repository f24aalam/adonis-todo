// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterController {
  public async index({ view }) {
    return view.render('auth/register')
  }
}
