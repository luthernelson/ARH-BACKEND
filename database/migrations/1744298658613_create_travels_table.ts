import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Travels extends BaseSchema {
  protected tableName = 'travels'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('employee_id').notNullable()
      table.integer('department_position_id').nullable()
      table.string('destination').nullable()
      table.date('start_date').nullable()
      table.date('end_date').nullable()
      table.string('purpose').nullable()
      table.string('grant').nullable()
      table.string('transportation').nullable()
      table.string('accommodation').nullable()
      table.string('request_by_signature').nullable()
      table.string('request_by_fullname').nullable()
      table.date('request_by_date').nullable()
      table.string('remarks').nullable()
      table.string('status').defaultTo('pending')

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
