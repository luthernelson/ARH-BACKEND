import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Payroll extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  // 🔹 Références
  @column()
  declare departmentId: number

  @column()
  declare employeeId: number

  // 📆 Dates
  @column.date()
  declare payPeriodDate: DateTime

  @column.date()
  declare payslipDate: DateTime | null

  // 💰 Rémunération de base
  @column()
  declare basicSalary: number

  @column()
  declare salaryByFTE: number // Ajusté selon le temps de travail effectif

  @column()
  declare compensationRefund: number // Remboursement indemnitaire ou autre

  // 🎁 Avantages
  @column()
  declare transportAllowance: number

  @column()
  declare housingAllowance: number

  @column()
  declare thirteenMonthSalary: number

  // 🕐 Heures supplémentaires
  @column()
  declare overtimeHours: number

  // 💸 Déductions salariales (à la charge du salarié)
  @column()
  declare employeeSocialSecurity: number

  @column()
  declare employeeHealthWelfare: number

  @column()
  declare tax: number

  @column()
  declare pvd: number // Prévoyance vieillesse/décès ou autre déduction

  @column()
  declare savingFund: number // Épargne salariale

  // 🏦 Cotisations patronales
  @column()
  declare employerSocialSecurity: number

  @column()
  declare employerHealthWelfare: number

  // 🧮 Totaux calculés
  @column()
  declare grandTotalIncome: number // Total brut

  @column()
  declare grandTotalDeduction: number // Total des déductions

  @column()
  declare netPaid: number // Salaire net à payer

  @column()
  declare employerContributionTotal: number // Total des charges patronales

  @column()
  declare twoSides: number // Coût total pour l’entreprise = net + charges patronales

  // 📑 Informations de la fiche de paie
  @column()
  declare payslipNumber: string | null

  @column()
  declare staffSignature: string | null

  // 📊 Suivi des actions
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare createdBy: string | null

  @column()
  declare updatedBy: string | null
}
