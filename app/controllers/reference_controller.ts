import Reference from '#models/reference'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Reference)

export default class ReferenceController extends CrudController<typeof Reference> {
  constructor() {
    super(userService)
  }
}
