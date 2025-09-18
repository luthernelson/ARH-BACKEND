import { Interview } from '#models/interview'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Interview)

export default class InterviewController extends CrudController<typeof Interview> {
  constructor() {
    super(userService)
  }
}
