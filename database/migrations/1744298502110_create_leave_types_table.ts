import { BaseSchema } from '@adonisjs/lucid/schema'

export default class LeaveTypes extends BaseSchema {
  protected tableName = 'leave_types'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.float('defaul_duration').notNullable()
      table.string('description').nullable()

      table.integer('created_by').unsigned().nullable()
      table.integer('updated_by').unsigned().nullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
