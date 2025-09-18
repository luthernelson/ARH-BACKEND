import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'

export default class AuthController {
  // Fonction auxiliaire pour envoyer des réponses d'erreur
  private responseError(message: string, statusCode: number, errors?: any) {
    return {
      status: 'error',
      message,
      errors,
      statusCode,
    }
  }

  // Fonction auxiliaire pour envoyer des réponses de succès
  private response(message: string, data?: any) {
    return {
      status: 'success',
      message,
      data,
    }
  }
  // Inscription
  public async register({ request, response }: HttpContext) {
    const { email, password, fullname, status, roles, permissions } = request.only([
      'email',
      'password',
      'fullname',
      'status',
      'roles',
      'permissions',
    ])

    const user = await User.create({
      email,
      password,
      fullname,
      status,
      roles,
      permissions,
    })

    return response.created({ message: 'Utilisateur créé avec succès', user })
  }

  public async login({ request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    // DEBUG: Afficher le mot de passe reçu (en clair)
    console.log('Mot de passe reçu (clair):', password)

    try {
      const user = await User.findBy('email', email)
      if (!user) {
        console.log('Aucun utilisateur trouvé avec cet email')
        return this.responseError('Invalid credentials', 401)
      }

      // DEBUG: Afficher le hash stocké
      console.log('Hash stocké dans la BDD:', user.password)

      const isPasswordValid = await hash.verify(user.password, password)
      console.log('Résultat de la vérification:', isPasswordValid)

      if (!isPasswordValid) {
        return this.responseError('Invalid credentials', 401)
      }

      const token = await User.accessTokens.create(user, ['*'], {
        name: email ?? cuid(),
        expiresIn: '2 hours', // Durée de validité du token
      })
      return this.response('Login successfully', { user, user_token: token })
    } catch (error: any) {
      console.error('Erreur technique:', error.message)
      return this.responseError('Invalid credentials', 400)
    }
  }

  // Déconnexion (supprime le token actuel)
  public async logout({ auth, response }: HttpContext) {
    const user = await auth.authenticate()
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)

    return response.json({ message: 'Logout successfully' })
  }
}
