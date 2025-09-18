import Trainer from '#models/trainer'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Trainer)

export default class TrainerController extends CrudController<typeof Trainer> {
  constructor() {
    super(userService)
  }
}
