import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'

export default class AuthController {
  // Inscription
  public async register({ request, response }: HttpContext) {
    const { email, password, fullName, status, roles, permissions } = request.only([
      'email',
      'password',
      'fullName',
      'status',
      'roles',
      'permissions',
    ])

    const user = await User.create({
      email,
      password: await hash.make(password),
      fullName,
      status,
      roles,
      permissions,
    })

    return response.created({ message: 'Utilisateur créé avec succès', user })
  }

  public async login({ request, response }: HttpContext) {
    const { email, password, identity } = request.only(['email', 'password', 'identity'])

    try {
      // check user
      const user = await User.findBy('email', email)
      if (!user) {
        return response.status(401).json({ error: 'email invalide' })
      }

      // check password
      const login = await hash.verify(user.password, password)
      console.log('Provided Password:', password)
      console.log('Stored Hash:', user.password)
      if (!login) {
        return response.status(401).json({ error: 'password invalid' })
      }
      // create token
      const token = await User.accessTokens.create(user, ['*'], {
        name: identity ?? process.env.TOKEN_IDENTITY ?? cuid(),
      })
      return response.status(200).json({ message: 'Login successfully', user, user_token: token })
    } catch (error: any) {
      return response.status(400).json({ error: 'Invalid credentials' })
    }
  }

  // Déconnexion (supprime le token actuel)
  public async logout({ auth, response }: HttpContext) {
    const user = await auth.authenticate()
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)

    return response.json({ message: 'Logout successfully' })
  }
}
