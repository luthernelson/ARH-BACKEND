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
import EnfantEmployesController from '#controllers/enfant_employes_controller'
import FormationsController from '#controllers/formations_controller'
import FormationEmployesController from '#controllers/formation_employes_controller'

const usersController = new UsersController()
const employeeController = new EmployeeController()
const departementController = new DepartementController()
const candidatController = new CandidatController()
const employmentgrantallocationController = new EmploymentgrantallocationController()
const employmentController = new EmploymentController()
const employmentHistoryController = new EmploymentHistoryController()
const employmentTypeController = new EmploymentTypeController()
const grantController = new GrantController()
const grantItem = new GrantItem()
const interviewController = new InterviewController()
const letterTemplateController = new LetterTemplateController()
const lookupController = new LookupController()
const workLocationController = new WorkLocationController()
const enfantEmployesController = new EnfantEmployesController()
const formationsController = new FormationsController()
const formationEmployesController = new FormationEmployesController()

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

// Toutes les routes API avec préfixe /api
router

  .group(() => {
    //User
    router.group(() => {
      router.get('/users', usersController.list.bind(usersController))
      router.get('/users/:id', usersController.show.bind(usersController))
      router.post('/users', usersController.store.bind(usersController))
      router.put('/users/:id', usersController.update.bind(usersController))
      router.delete('/users/:id', usersController.destroy.bind(usersController))
    })

    //employee ok
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
    router.group(() => {
      router.get('/worklocation', workLocationController.list.bind(workLocationController))
      router.get('/worklocation/:id', workLocationController.show.bind(workLocationController))
      router.post('/worklocation', workLocationController.store.bind(workLocationController))
      router.put('/worklocation/:id', workLocationController.update.bind(workLocationController))
      router.delete(
        '/worklocation/:id',
        workLocationController.destroy.bind(workLocationController)
      )
    })

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

    //Interviews ok
    router.group(() => {
      router.get('/interviews', interviewController.list.bind(interviewController))
      router.get('/interviews/:id', interviewController.show.bind(interviewController))
      router.post('/interviews', interviewController.store.bind(interviewController))
      router.put('/interviews/:id', interviewController.update.bind(interviewController))
      router.delete('/interviews/:id', interviewController.destroy.bind(interviewController))
    })

    //grantitems
    router.group(() => {
      router.get('/grantitems', grantItem.list.bind(grantItem))
      router.get('/grantitems/:id', grantItem.show.bind(grantItem))
      router.post('/grrantitems', grantItem.store.bind(grantItem))
      router.put('/grantitems/:id', grantItem.update.bind(grantItem))
      router.delete('/grantitems/:id', grantItem.destroy.bind(grantItem))
    })

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
    router.group(() => {
      router.get('/employmentTypes', employmentTypeController.list.bind(employmentTypeController))
      router.get(
        '/employmentTypes/:id',
        employmentTypeController.show.bind(employmentTypeController)
      )
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
    //formation
    router.group(() => {
      router.get('/formation', formationsController.list.bind(formationsController))
      router.get('/formation/:id', formationsController.show.bind(formationsController))
      router.post('/formation', formationsController.store.bind(formationsController))
      router.put('/formation/:id', formationsController.update.bind(formationsController))
      router.delete('/formation/:id', formationsController.destroy.bind(formationsController))
    })
    //formationemployes
    router.group(() => {
      router.get(
        '/formationemployes',
        formationEmployesController.list.bind(formationEmployesController)
      )
      router.get(
        '/formationemployes/:id',
        formationEmployesController.show.bind(formationEmployesController)
      )
      router.post(
        '/formationemployes',
        formationEmployesController.store.bind(formationEmployesController)
      )
      router.put(
        '/formationemployes/:id',
        formationEmployesController.update.bind(formationEmployesController)
      )
      router.delete(
        '/formationemployes/:id',
        formationEmployesController.destroy.bind(formationEmployesController)
      )
    })
    //enfantemployes
    router.group(() => {
      router.get('/enfantemployes', enfantEmployesController.list.bind(enfantEmployesController))
      router.get(
        '/enfantemployes/:id',
        enfantEmployesController.show.bind(enfantEmployesController)
      )
      router.post('/enfantemployes', enfantEmployesController.store.bind(enfantEmployesController))
      router.put(
        '/enfantemployes/:id',
        enfantEmployesController.update.bind(enfantEmployesController)
      )
      router.delete(
        '/enfantemployes/:id',
        enfantEmployesController.destroy.bind(enfantEmployesController)
      )
    })
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
  })
  //.middleware('auth') // Protège toutes les routes
  .prefix('/api')
