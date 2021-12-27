// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async index({ view }) {
    return view.render('auth/login')
  }
}
