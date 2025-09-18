import WorkLocation from '#models/worklocation'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(WorkLocation)

export default class WorkLocationController extends CrudController<typeof WorkLocation> {
  constructor() {
    super(userService)
  }
}
