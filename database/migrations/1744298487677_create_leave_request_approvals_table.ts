import { BaseSchema } from '@adonisjs/lucid/schema'

export default class LeaveRequestApprovals extends BaseSchema {
  protected tableName = 'leave_request_approvals'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('leave_request_id').unsigned().notNullable()
      table.string('approver_role').nullable()
      table.string('approver_name').nullable()
      table.string('approver_signature').nullable()
      table.timestamp('approver_date', { useTz: true }).nullable()

      table.string('status').nullable()

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
