import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'formation_employes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Employee Training ID
      table.integer('employee_id').unsigned().notNullable() // Employee ID
      table.integer('training_id').unsigned().notNullable() // Training ID
      table.string('status').notNullable() // Training status
      table.string('created_by').notNullable() // User who created the record
      table.string('updated_by').notNullable() // User who last updated the record
      table.timestamp('created_at', { useTz: true }) // Creation date
      table.timestamp('updated_at', { useTz: true }) // Last update date

      // Facultatif : clés étrangères si les tables `employees` et `trainings` existent
      table.foreign('employee_id').references('id').inTable('employees').onDelete('CASCADE')
      table.foreign('training_id').references('id').inTable('formations').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
