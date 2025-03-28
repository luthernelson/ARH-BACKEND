import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Employments extends BaseSchema {
  protected tableName = 'employments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('employee_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('employees')
        .onDelete('CASCADE')
      table
        .integer('employment_type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('employment_types')
        .onDelete('CASCADE')
      table.timestamp('start_date', { useTz: true }).notNullable()
      table.timestamp('probation_end_date', { useTz: true }).nullable()
      table.timestamp('end_date', { useTz: true }).nullable()
      table
        .integer('position_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('positions')
        .onDelete('CASCADE')
      table
        .integer('department_id')
        .unsigned()
        .notNullable()
        .references('identifiant')
        .inTable('departements')
        .onDelete('CASCADE')
      table
        .integer('work_location_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('work_locations')
        .onDelete('CASCADE')
      table.integer('position_salary').notNullable()
      table.integer('probation_salary').nullable()
      table
        .integer('supervisor_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('employees')
        .onDelete('SET NULL')
      table.integer('employee_tax').nullable()
      table.integer('fte').nullable()
      table.boolean('active').notNullable().defaultTo(true)
      table.boolean('health_welfare').notNullable().defaultTo(false)
      table.boolean('pvd').notNullable().defaultTo(false)
      table.boolean('saving_fund').notNullable().defaultTo(false)
      table.string('social_security_id').nullable()
      table
        .integer('grant_item_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('grant_items')
        .onDelete('SET NULL')
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
