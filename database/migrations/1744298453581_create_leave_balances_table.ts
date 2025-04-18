import { BaseSchema } from '@adonisjs/lucid/schema'

export default class LeaveBalances extends BaseSchema {
  protected tableName = 'leave_balances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('employee_id').unsigned().notNullable()
      table.integer('leave_type_id').unsigned().notNullable()
      table.integer('reamaining_days').notNullable()

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
