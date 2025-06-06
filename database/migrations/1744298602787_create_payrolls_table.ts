import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Payrolls extends BaseSchema {
  protected tableName = 'payrolls'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('department_id').unsigned().notNullable()
      table.integer('employee_id').unsigned().notNullable()
      table.date('pay_period_date').notNullable()
      table.integer('years_of_service').unsigned().notNullable().defaultTo(0)
      table.date('payslip_date').nullable()
      table.decimal('basic_salary', 12, 2).notNullable()
      table.decimal('seniority_bonus', 12, 2).notNullable().defaultTo(0)
      table.decimal('overtime_hours', 8, 2).notNullable().defaultTo(0)
      table.decimal('overtime_rate', 5, 2).notNullable().defaultTo(50) // 50% par défaut
      table.decimal('overtime_pay', 12, 2).notNullable().defaultTo(0)
      table.decimal('transport_allowance', 12, 2).notNullable().defaultTo(0)
      table.decimal('housing_allowance', 12, 2).notNullable().defaultTo(0)
      table.decimal('thirteenth_month_salary', 12, 2).notNullable().defaultTo(0)
      table.decimal('employee_social_security', 12, 2).notNullable().defaultTo(0)
      table.decimal('employee_health_welfare', 12, 2).notNullable().defaultTo(0)
      table.decimal('tax', 12, 2).notNullable().defaultTo(0)
      table.decimal('employer_social_security', 12, 2).notNullable().defaultTo(0)
      table.decimal('employer_health_welfare', 12, 2).notNullable().defaultTo(0)
      table.decimal('gross_salary', 12, 2).notNullable().defaultTo(0)
      table.decimal('total_deductions', 12, 2).notNullable().defaultTo(0)
      table.decimal('net_salary', 12, 2).notNullable().defaultTo(0)
      table.decimal('employer_contribution_total', 12, 2).notNullable().defaultTo(0)
      table.decimal('total_cost', 12, 2).notNullable().defaultTo(0)
      table.string('payslip_number', 50).nullable()
      table.string('staff_signature', 100).nullable()
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.index(['employee_id'], 'payroll_employee_index')
      table.index(['department_id'], 'payroll_department_index')
      table.index(['pay_period_date'], 'payroll_period_index')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
