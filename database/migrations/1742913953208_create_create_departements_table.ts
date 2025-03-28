import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Departements extends BaseSchema {
  protected tableName = 'departements'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('identifiant')
      table.string('nom').notNullable()
      table.string('position').notNullable()
      table.string('description').notNullable()
      table.string('cree_par').notNullable()
      table.string('signaler_a').notNullable()
      table.string('mis_a_jour_par').notNullable()
      table.timestamp('cree_a', { useTz: true }).defaultTo(this.now())
      table.timestamp('mis_a_jour_a', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
