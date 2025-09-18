import { GrantItem } from '#models/grantitem'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

// import type { HttpContext } from '@adonisjs/core/http'
const userService = new CrudService(GrantItem)

export default class GrantItemController extends CrudController<typeof GrantItem> {
  constructor() {
    super(userService)
  }
}
