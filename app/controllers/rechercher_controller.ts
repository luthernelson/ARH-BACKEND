import Lookup from '#models/recherche'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Lookup)

export default class LookupController extends CrudController<typeof Lookup> {
  constructor() {
    super(userService)
  }
}
