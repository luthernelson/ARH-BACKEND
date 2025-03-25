import { BaseSchema } from '@adonisjs/lucid/schema'

export default class EmploymentHistories extends BaseSchema {
  protected tableName = 'employment_histories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('employment_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('employments')
        .onDelete('CASCADE')
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
        .onDelete('SET NULL')
      table.dateTime('start_date').notNullable()
      table.dateTime('probation_end_date').nullable()
      table.dateTime('end_date').nullable()

      /*       table
        .integer('position_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('positions')
        .onDelete('SET NULL') */
      table
        .integer('department_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('departments')
        .onDelete('SET NULL')
      table
        .integer('work_location_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('work_locations')
        .onDelete('SET NULL')
      table.decimal('position_salary', 10, 2).notNullable()
      table.decimal('probation_salary', 10, 2).nullable()
      table
        .integer('supervisor_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('employees')
        .onDelete('SET NULL')
      table.decimal('employee_tax', 10, 2).nullable()
      table.decimal('fte', 5, 2).nullable()
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
