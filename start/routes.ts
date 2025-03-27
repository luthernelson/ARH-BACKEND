/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'
import UsersController from '#controllers/users_controller'

let usersController = new UsersController()

router.get('/', async () => {
  return {
    hello: 'salut ceci est un test',
  }
})

// Routes d'authentification
router.group(() => {
  // Connexion
  router.post('/login', async ({ request, response }) => {
    const { default: AuthController } = await import('#controllers/http/auth_controller')
    return new AuthController().login({ request, response } as HttpContext)
  })

  // Inscription
  router.post('/register', async ({ request, response }) => {
    const { default: AuthController } = await import('#controllers/http/auth_controller')
    return new AuthController().register({ request, response } as HttpContext)
  })
})

router
  .group(() => {
    router.get('/users', usersController.list)
    router.get('/users/:id', usersController.show)
    router.post('/users', usersController.store)
    router.put('/users/:id', usersController.update)
    router.delete('/users/:id', usersController.destroy)
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')
