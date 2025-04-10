import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'formations'
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // identifiant unique
      table.string('titre').notNullable()
      table.string('foramteur_name').notNullable() // vérifie si tu voulais dire "formateurName" ?
      table.text('description').nullable()
      table.timestamp('date_debut', { useTz: true }).notNullable()
      table.timestamp('date_fin', { useTz: true }).notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
