import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Payrolls extends BaseSchema {
  protected tableName = 'payrolls'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('employee_id').unsigned().notNullable()

      table.date('pay_period_date').nullable()

      table.float('basic_salary').notNullable()
      table.float('salary_by_fte').notNullable()
      table.float('compensation_refund').notNullable()
      table.float('thirteen_month_salary').notNullable()
      table.float('pvd').notNullable()
      table.float('saving_fund').notNullable()
      table.float('employer_social_security').notNullable()
      table.float('employee_social_security').notNullable()
      table.float('employer_health_welfare').notNullable()
      table.float('employee_health_welfare').notNullable()
      table.float('tax').notNullable()
      table.float('grand_total_income').notNullable()
      table.float('grand_total_deduction').notNullable()
      table.float('net_paid').notNullable()
      table.float('employer_contribution_total').notNullable()
      table.float('two_sides').notNullable()

      table.date('payslip_date').nullable()
      table.string('payslip_number').nullable()
      table.string('staff_signature').nullable()

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
