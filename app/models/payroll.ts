import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Payroll extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  // === Champs correspondant exactement à formData ===

  // Références
  @column()
  declare department_id: number

  @column()
  declare employee_id: number

  // Dates
  @column.date()
  declare pay_period_date: DateTime

  @column()
  declare years_of_service: number

  // Salaire et primes
  @column()
  declare basic_salary: number

  @column()
  declare seniority_bonus: number

  // Heures supplémentaires
  @column()
  declare overtime_hours: number

  @column()
  declare overtime_rate: number

  @column()
  declare overtime_pay: number

  // Avantages
  @column()
  declare transport_allowance: number

  @column()
  declare housing_allowance: number

  @column()
  declare thirteenth_month_salary: number

  // Déductions
  @column()
  declare employee_social_security: number

  @column()
  declare employee_health_welfare: number

  @column()
  declare tax: number

  // Cotisations employeur
  @column()
  declare employer_social_security: number

  @column()
  declare employer_health_welfare: number

  // Totaux
  @column()
  declare gross_salary: number

  @column()
  declare total_deductions: number

  @column()
  declare net_salary: number

  @column()
  declare employer_contribution_total: number

  @column()
  declare total_cost: number

  // Info bulletin de paie
  @column.date()
  declare payslip_date: DateTime | null

  @column()
  declare payslip_number: string | null

  @column()
  declare staff_signature: string | null

  // === Champs supplémentaires (gestion interne) ===
  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  // Note: Le champ 'hire_date' de formData n'est pas inclus car il semble être
  // utilisé uniquement pour le calcul et non stocké dans la payroll
}
