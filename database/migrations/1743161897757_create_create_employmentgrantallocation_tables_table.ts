import { BaseSchema } from '@adonisjs/lucid/schema'

export default class EmploymentGrantAllocation extends BaseSchema {
  protected tableName = 'employmentgrantallocations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('identifiant')
      table.integer('employment_id').unsigned().notNullable()
      table.integer('grant_items_id').unsigned().notNullable()
      table.float('level_of_effort').notNullable()
      table.timestamp('active', { useTz: true }).nullable()
      table.timestamp('start_date', { useTz: true }).nullable()
      table.string('end_date').nullable()
      table.timestamp('cree_a', { useTz: true }).defaultTo(this.now())
      table.timestamp('mis_a_jour_a', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
