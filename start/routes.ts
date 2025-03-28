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
import EmployeeController from '#controllers/employe_controller'
import DepartementController from '#controllers/departement_controller'
import CandidatController from '#controllers/candidats_controller'
import EmploymentgrantallocationController from '#controllers/employmentgrantallocation_controller'
import EmploymentController from '#controllers/employment_controller'
import EmploymentHistoryController from '#controllers/enmploymenthistorie_controller'
import EmploymentTypeController from '#controllers/employmenttype_controller'
import GrantController from '#controllers/grant_controller'
import GrantItem from '#controllers/grantitem_controller'
import InterviewController from '#controllers/interview_controller'
import LetterTemplateController from '#controllers/employmentgrantallocation_controller'
import LookupController from '#controllers/lettertemplate_controller'
import WorkLocationController from '#controllers/worklocation_controller'

let usersController = new UsersController()
let employeeController = new EmployeeController()
let departementController = new DepartementController()
let candidatController = new CandidatController()
let employmentgrantallocationController = new EmploymentgrantallocationController()
let employmentController = new EmploymentController()
let employmentHistoryController = new EmploymentHistoryController()
let employmentTypeController = new EmploymentTypeController()
let grantController = new GrantController()
let grantItem = new GrantItem()
let interviewController = new InterviewController()
let letterTemplateController = new LetterTemplateController()
let lookupController = new LookupController()
let workLocationController = new WorkLocationController()

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
})

//User
router
  .group(() => {
    router.get('/users', usersController.list.bind(usersController))
    router.get('/users/:id', usersController.show.bind(usersController))
    router.post('/users', usersController.store.bind(usersController))
    router.put('/users/:id', usersController.update.bind(usersController))
    router.delete('/users/:id', usersController.destroy.bind(usersController))
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')

//employee
router.group(() => {
  router.get('/employee', employeeController.list.bind(employeeController))
  router.get('/employee/:id', employeeController.show.bind(employeeController))
  router.post('/employee', employeeController.store.bind(employeeController))
  router.put('/employee/:id', employeeController.update.bind(employeeController))
  router.delete('/employee/:id', employeeController.destroy.bind(employeeController))
})

//departement
router.group(() => {
  router.get('/departemnt', departementController.list.bind(departementController))
  router.get('/departemnt/:id', departementController.show.bind(departementController))
  router.post('/departemnt', departementController.store.bind(departementController))
  router.put('/departemnt/:id', departementController.update.bind(departementController))
  router.delete('/departemnt/:id', departementController.destroy.bind(departementController))
})

//candidat
router.group(() => {
  router.get('/candidat', candidatController.list.bind(candidatController))
  router.get('/candidat/:id', candidatController.show.bind(candidatController))
  router.post('/candidat', candidatController.store.bind(candidatController))
  router.put('/candidat/:id', candidatController.update.bind(candidatController))
  router.delete('/candidat/:id', candidatController.destroy.bind(candidatController))
})
//Worlocation
router
  .group(() => {
    router.get('/users', usersController.list.bind(usersController))
    router.get('/users/:id', usersController.show.bind(usersController))
    router.post('/users', usersController.store.bind(usersController))
    router.put('/users/:id', usersController.update.bind(usersController))
    router.delete('/users/:id', usersController.destroy.bind(usersController))
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')

//Lookup
router.group(() => {
  router.get('/employee', employeeController.list.bind(employeeController))
  router.get('/employee/:id', employeeController.show.bind(employeeController))
  router.post('/employee', employeeController.store.bind(employeeController))
  router.put('/employee/:id', employeeController.update.bind(employeeController))
  router.delete('/employee/:id', employeeController.destroy.bind(employeeController))
})

//TemplateLetter
router.group(() => {
  router.get('/departemnt', departementController.list.bind(departementController))
  router.get('/departemnt/:id', departementController.show.bind(departementController))
  router.post('/departemnt', departementController.store.bind(departementController))
  router.put('/departemnt/:id', departementController.update.bind(departementController))
  router.delete('/departemnt/:id', departementController.destroy.bind(departementController))
})

//Interviews
router.group(() => {
  router.get('/candidat', candidatController.list.bind(candidatController))
  router.get('/candidat/:id', candidatController.show.bind(candidatController))
  router.post('/candidat', candidatController.store.bind(candidatController))
  router.put('/candidat/:id', candidatController.update.bind(candidatController))
  router.delete('/candidat/:id', candidatController.destroy.bind(candidatController))
})
//grantitems
router
  .group(() => {
    router.get('/users', usersController.list.bind(usersController))
    router.get('/users/:id', usersController.show.bind(usersController))
    router.post('/users', usersController.store.bind(usersController))
    router.put('/users/:id', usersController.update.bind(usersController))
    router.delete('/users/:id', usersController.destroy.bind(usersController))
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')

//grant
router.group(() => {
  router.get('/employee', employeeController.list.bind(employeeController))
  router.get('/employee/:id', employeeController.show.bind(employeeController))
  router.post('/employee', employeeController.store.bind(employeeController))
  router.put('/employee/:id', employeeController.update.bind(employeeController))
  router.delete('/employee/:id', employeeController.destroy.bind(employeeController))
})

//employmentallocation
router.group(() => {
  router.get('/departemnt', departementController.list.bind(departementController))
  router.get('/departemnt/:id', departementController.show.bind(departementController))
  router.post('/departemnt', departementController.store.bind(departementController))
  router.put('/departemnt/:id', departementController.update.bind(departementController))
  router.delete('/departemnt/:id', departementController.destroy.bind(departementController))
})

//employment
router.group(() => {
  router.get('/candidat', candidatController.list.bind(candidatController))
  router.get('/candidat/:id', candidatController.show.bind(candidatController))
  router.post('/candidat', candidatController.store.bind(candidatController))
  router.put('/candidat/:id', candidatController.update.bind(candidatController))
  router.delete('/candidat/:id', candidatController.destroy.bind(candidatController))
})
//employmentTypes
router
  .group(() => {
    router.get('/users', usersController.list.bind(usersController))
    router.get('/users/:id', usersController.show.bind(usersController))
    router.post('/users', usersController.store.bind(usersController))
    router.put('/users/:id', usersController.update.bind(usersController))
    router.delete('/users/:id', usersController.destroy.bind(usersController))
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')

//employmentHistories
router.group(() => {
  router.get('/employee', employeeController.list.bind(employeeController))
  router.get('/employee/:id', employeeController.show.bind(employeeController))
  router.post('/employee', employeeController.store.bind(employeeController))
  router.put('/employee/:id', employeeController.update.bind(employeeController))
  router.delete('/employee/:id', employeeController.destroy.bind(employeeController))
})
