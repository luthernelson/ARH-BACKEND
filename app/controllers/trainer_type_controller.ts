// import type { HttpContext } from '@adonisjs/core/http'
import TrainerType from '#models/trainer_type'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

const userService = new CrudService(TrainerType)

export default class TrainerTypeController extends CrudController<typeof TrainerType> {
  constructor() {
    super(userService)
  }
}
