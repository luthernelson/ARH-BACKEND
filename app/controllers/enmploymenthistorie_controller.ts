import EmploymentHistory from '#models/employment_history'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(EmploymentHistory)

export default class EmploymentHistoryController extends CrudController<typeof EmploymentHistory> {
  constructor() {
    super(userService)
  }
}
