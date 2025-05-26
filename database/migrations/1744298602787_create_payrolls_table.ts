import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Payrolls extends BaseSchema {
  protected tableName = 'payrolls'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // 🔹 Références
      table.integer('department_id').unsigned().notNullable()
      table.integer('employee_id').unsigned().notNullable()

      // 📆 Dates
      table.date('pay_period_date').nullable()
      table.date('payslip_date').nullable()

      // 💰 Rémunération de base
      table.float('basic_salary').notNullable()
      table.float('salary_by_fte').notNullable()
      table.float('compensation_refund').notNullable()

      // 🎁 Avantages
      table.float('transport_allowance').notNullable()
      table.float('housing_allowance').notNullable()
      table.float('thirteen_month_salary').notNullable()

      // 🕐 Heures supplémentaires
      table.float('overtime_hours').notNullable()

      // 💸 Déductions salariales (part salarié)
      table.float('employee_social_security').notNullable()
      table.float('employee_health_welfare').notNullable()
      table.float('tax').notNullable()
      table.float('pvd').notNullable()
      table.float('saving_fund').notNullable()

      // 🏦 Cotisations patronales
      table.float('employer_social_security').notNullable()
      table.float('employer_health_welfare').notNullable()

      // 🧮 Totaux calculés
      table.float('grand_total_income').notNullable()
      table.float('grand_total_deduction').notNullable()
      table.float('net_paid').notNullable()
      table.float('employer_contribution_total').notNullable()
      table.float('two_sides').notNullable()

      // 📑 Fiche de paie
      table.string('payslip_number').nullable()
      table.string('staff_signature').nullable()

      // 📊 Suivi des actions
      table.string('created_by').nullable()
      table.string('updated_by').nullable()

      // ⏱️ Timestamps
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
