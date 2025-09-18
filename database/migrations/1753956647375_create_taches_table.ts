import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'taches'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Informations de base
      table.string('title').notNullable()
      table.string('tag').notNullable()
      table.enum('priority', ['low', 'medium', 'high']).defaultTo('medium')
      table.text('description').notNullable()

      // Assignation
      table.integer('assignee_id').unsigned().references('id').inTable('users')

      // Statut
      table
        .enum('status', ['pending', 'in_progress', 'completed', 'cancelled'])
        .defaultTo('pending')

      // Timestamps
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
