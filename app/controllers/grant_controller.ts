import { Grant } from '#models/grant'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Grant)

export default class GrantController extends CrudController<typeof Grant> {
  constructor() {
    super(userService)
  }
}
