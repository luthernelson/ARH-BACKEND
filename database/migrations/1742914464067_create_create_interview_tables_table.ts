import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Interviews extends BaseSchema {
  protected tableName = 'interviews'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('candidate_name', 255).notNullable()
      table.string('phone', 10).nullable()
      table.string('resume', 255).nullable()
      table.string('job_position', 255).notNullable()

      table.string('interviewer_name').nullable()
      table.dateTime('interview_date').nullable()
      table.string('start_time').nullable()
      table.string('end_time').nullable()
      table.enum('interview_mode', ['in-person', 'virtual']).nullable()
      table.enum('interview_status', ['scheduled', 'completed', 'cancelled']).notNullable()

      table.integer('score').nullable()
      table.text('feedback').nullable()
      table.text('reference_info').nullable()

      table.string('created_by').nullable()
      table.string('updated_by').nullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
