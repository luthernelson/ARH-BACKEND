import Training from '#models/training'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Training)

export default class TrainingController extends CrudController<typeof Training> {
  constructor() {
    super(userService)
  }
}
