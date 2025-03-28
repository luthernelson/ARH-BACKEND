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
    router.get('/worklocation', workLocationController.list.bind(workLocationController))
    router.get('/worklocation/:id', workLocationController.show.bind(workLocationController))
    router.post('/worklocation', workLocationController.store.bind(workLocationController))
    router.put('/worklocation/:id', workLocationController.update.bind(workLocationController))
    router.delete('/worklocation/:id', workLocationController.destroy.bind(workLocationController))
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')

//Lookup
router.group(() => {
  router.get('/lookup', lookupController.list.bind(lookupController))
  router.get('/lookup/:id', lookupController.show.bind(lookupController))
  router.post('/lookup', lookupController.store.bind(lookupController))
  router.put('/lookup/:id', lookupController.update.bind(lookupController))
  router.delete('/lookup/:id', lookupController.destroy.bind(lookupController))
})

//TemplateLetter
router.group(() => {
  router.get('/letter', letterTemplateController.list.bind(letterTemplateController))
  router.get('/letter/:id', letterTemplateController.show.bind(letterTemplateController))
  router.post('/letter', letterTemplateController.store.bind(letterTemplateController))
  router.put('/letter/:id', letterTemplateController.update.bind(letterTemplateController))
  router.delete('/letter/:id', letterTemplateController.destroy.bind(letterTemplateController))
})

//Interviews
router.group(() => {
  router.get('/interviews', interviewController.list.bind(interviewController))
  router.get('/interviews/:id', interviewController.show.bind(interviewController))
  router.post('/interview', interviewController.store.bind(interviewController))
  router.put('/interview/:id', interviewController.update.bind(interviewController))
  router.delete('/interview/:id', interviewController.destroy.bind(interviewController))
})
//grantitems
router
  .group(() => {
    router.get('/grantitems', grantItem.list.bind(grantItem))
    router.get('/grantitems/:id', grantItem.show.bind(grantItem))
    router.post('/grrantitems', grantItem.store.bind(grantItem))
    router.put('/grantitems/:id', grantItem.update.bind(grantItem))
    router.delete('/grantitems/:id', grantItem.destroy.bind(grantItem))
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')

//grant
router.group(() => {
  router.get('/grant', grantController.list.bind(grantController))
  router.get('/grant/:id', grantController.show.bind(grantController))
  router.post('/grant', grantController.store.bind(grantController))
  router.put('/grant/:id', grantController.update.bind(grantController))
  router.delete('/grant/:id', grantController.destroy.bind(grantController))
})

//employmentallocation
router.group(() => {
  router.get(
    '/grantallocation',
    employmentgrantallocationController.list.bind(employmentgrantallocationController)
  )
  router.get(
    '/grantallocation/:id',
    employmentgrantallocationController.show.bind(employmentgrantallocationController)
  )
  router.post(
    '/grantallocation',
    employmentgrantallocationController.store.bind(employmentgrantallocationController)
  )
  router.put(
    '/grantallocation/:id',
    employmentgrantallocationController.update.bind(employmentgrantallocationController)
  )
  router.delete(
    '/grantallocation/:id',
    employmentgrantallocationController.destroy.bind(employmentgrantallocationController)
  )
})

//employment
router.group(() => {
  router.get('/employment', employmentController.list.bind(employmentController))
  router.get('/employment/:id', employmentController.show.bind(employmentController))
  router.post('/employment', employmentController.store.bind(employmentController))
  router.put('/employment/:id', employmentController.update.bind(employmentController))
  router.delete('/employment/:id', employmentController.destroy.bind(employmentController))
})
//employmentTypes
router
  .group(() => {
    router.get('/employmentTypes', employmentTypeController.list.bind(employmentTypeController))
    router.get('/employmentTypes/:id', employmentTypeController.show.bind(employmentTypeController))
    router.post('/employmentTypes', employmentTypeController.store.bind(employmentTypeController))
    router.put(
      '/employmentTypes/:id',
      employmentTypeController.update.bind(employmentTypeController)
    )
    router.delete(
      '/employmentTypes/:id',
      employmentTypeController.destroy.bind(employmentTypeController)
    )
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')

//employmentHistories
router.group(() => {
  router.get(
    '/employmentHistories',
    employmentHistoryController.list.bind(employmentHistoryController)
  )
  router.get(
    '/employmentHistories/:id',
    employmentHistoryController.show.bind(employmentHistoryController)
  )
  router.post(
    '/employmentHistories',
    employmentHistoryController.store.bind(employmentHistoryController)
  )
  router.put(
    '/employmentHistories/:id',
    employmentHistoryController.update.bind(employmentHistoryController)
  )
  router.delete(
    '/employmentHistories/:id',
    employmentHistoryController.destroy.bind(employmentHistoryController)
  )
})
