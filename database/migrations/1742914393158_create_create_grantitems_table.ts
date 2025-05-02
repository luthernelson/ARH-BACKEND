import { BaseSchema } from '@adonisjs/lucid/schema'

export default class GrantItems extends BaseSchema {
  protected tableName = 'grant_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('grant_id').notNullable().references('id').inTable('grants').onDelete('CASCADE')
      table.string('bg_line').nullable()
      table.string('grant_position').nullable()
      table.integer('grant_salary').nullable()
      table.integer('grant_benefit').nullable()
      table.integer('grant_level_of_effort').nullable()
      table.integer('grant_position_number').nullable()
      table.integer('grant_cost_by_monthly').nullable()
      table.integer('grant_total_cost_by_person').nullable()
      table.integer('grant_benefit_fte').nullable()
      table.integer('position_id').nullable()
      table.integer('grant_total_amount').nullable()
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
