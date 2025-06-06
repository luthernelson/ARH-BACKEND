import Job from '#models/job'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(Job)

export default class JobController extends CrudController<typeof Job> {
  constructor() {
    super(userService)
  }
}
