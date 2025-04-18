import { BaseSchema } from '@adonisjs/lucid/schema'

export default class TravelRequestApprovals extends BaseSchema {
  protected tableName = 'travel_request_approvals'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('travel_request_id').unsigned().notNullable()
      table.string('approver_role').nullable()
      table.string('approver_name').nullable()
      table.string('approver_signature').nullable()
      table.date('approval_date').nullable()
      table.string('status').nullable()
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
