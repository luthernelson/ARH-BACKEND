import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Interviews extends BaseSchema {
  protected tableName = 'interviews'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('candidat_id')
        .nullable()
        .references('identifiant')
        .inTable('candidats')
        .onDelete('SET NULL')
      table
        .integer('grant_position_id')
        .nullable()
        .references('id')
        .inTable('grant_items')
        .onDelete('SET NULL')
      table.string('interviewer_name').nullable()
      table.string('interview_date').nullable()
      table.string('start_time').nullable()
      table.string('end_time').nullable()
      table.enum('interview_mode', ['in-person', 'virtual']).nullable()
      table.enum('interview_status', ['scheduled', 'completed', 'cancelled']).notNullable()
      table.integer('score').nullable()
      table.text('feedback').nullable()
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
