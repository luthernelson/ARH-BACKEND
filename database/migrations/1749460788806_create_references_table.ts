import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'references'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('entreprise_name').notNullable()
      table.string('entreprise_adresse').notNullable()
      table.string('phone_entreprise').nullable()
      table.string('name').notNullable()
      table.string('job_title').notNullable()
      table.string('candidate_id').notNullable()
      table.string('status').notNullable()
      table
        .integer('candidate_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('candidats')
        .onDelete('SET NULL')
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }
  async down() {
    this.schema.dropTable(this.tableName)
  }
}
