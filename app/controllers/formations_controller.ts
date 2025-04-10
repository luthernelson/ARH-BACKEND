// import type { HttpContext } from '@adonisjs/core/http'
import Formation from '#models/formation'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

const userService = new CrudService(Formation)

export default class FormationsController extends CrudController<typeof Formation> {
  constructor() {
    super(userService)
  }
}
