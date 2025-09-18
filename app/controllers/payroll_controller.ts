import Payroll from '#models/payroll'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Payroll)

export default class PayrollController extends CrudController<typeof Payroll> {
  constructor() {
    super(userService)
  }
}
