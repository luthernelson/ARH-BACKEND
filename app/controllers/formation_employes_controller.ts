// import type { HttpContext } from '@adonisjs/core/http'
import FormationEmploye from '#models/formation_employe'
import CrudService from '#services/crud_service'
import CrudController from './crud_controller.js'

const userService = new CrudService(FormationEmploye)

export default class FormationEmployesController extends CrudController<typeof FormationEmploye> {
  constructor() {
    super(userService)
  }

  // Add any additional methods or overrides specific to FormationEmployesController here
}
