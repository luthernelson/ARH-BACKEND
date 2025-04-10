// import type { HttpContext } from '@adonisjs/core/http'
import EnfantEmploye from '#models/childemployee'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

const userService = new CrudService(EnfantEmploye)

export default class EnfantEmployesController extends CrudController<typeof EnfantEmploye> {
  constructor() {
    super(userService)
  }
}
