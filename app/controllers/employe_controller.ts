import Employee from '#models/employee'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Employee)

export default class EmployeeController extends CrudController<typeof Employee> {
  constructor() {
    super(userService)
  }
}
