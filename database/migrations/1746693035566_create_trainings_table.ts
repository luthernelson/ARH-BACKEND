import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Trainings extends BaseSchema {
  protected tableName = 'trainings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('training_type').notNullable()
      table.string('trainer').notNullable()

      // Clés étrangères (optionnelles si training_type & trainer sont ajoutés directement)
      table
        .integer('training_type_id')
        .unsigned()
        .references('id')
        .inTable('trainer_types')
        .onDelete('CASCADE')
        .nullable() // rendre facultatif si 'training_type' est utilisé

      table
        .integer('trainer_id')
        .unsigned()
        .references('id')
        .inTable('trainers')
        .onDelete('CASCADE')
        .nullable() // rendre facultatif si 'trainer' est utilisé

      table.specificType('employees', 'text[]').notNullable()
      table.integer('training_cost').notNullable()
      table.text('description').notNullable()
      table.boolean('status').notNullable()

      table.date('start_date').notNullable()
      table.date('end_date').notNullable()

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
