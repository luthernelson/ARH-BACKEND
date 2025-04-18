import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Trainings extends BaseSchema {
  protected tableName = 'trainings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.string('organizer').notNullable()
      table.date('start_date').notNullable()
      table.date('end_date').notNullable()

      table.string('created_by').nullable()
      table.string('updated_by').nullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
