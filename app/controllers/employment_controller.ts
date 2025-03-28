import Employment from '#models/employment'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Employment)

export default class EmploymentController extends CrudController<typeof Employment> {
  constructor() {
    super(userService)
  }
}
