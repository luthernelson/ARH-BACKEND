import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Jobs extends BaseSchema {
  protected tableName = 'jobs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.date('date').notNullable()
      table.string('candidate_name').notNullable()
      table.string('position_name').notNullable()
      table.string('salary_detail').notNullable()
      table.date('acceptance_deadline').notNullable()
      table.string('acceptance_status').notNullable()
      table.string('note').notNullable()
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
