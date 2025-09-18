import EmploymentType from '#models/employment_type'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(EmploymentType)

export default class EmploymentTypeController extends CrudController<typeof EmploymentType> {
  constructor() {
    super(userService)
  }
}
