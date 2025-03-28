import Employmentgrantallocation from '#models/EmploymentGrantAllocation'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Employmentgrantallocation)

export default class EmploymentgrantallocationController extends CrudController<
  typeof Employmentgrantallocation
> {
  constructor() {
    super(userService)
  }
}
