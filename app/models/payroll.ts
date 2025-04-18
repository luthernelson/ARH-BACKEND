import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Payroll extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare employeeId: number

  @column.date()
  declare payPeriodDate: DateTime

  @column()
  declare basicSalary: number

  @column()
  declare salaryByFTE: number

  @column()
  declare compensationRefund: number

  @column()
  declare thirteenMonthSalary: number

  @column()
  declare pvd: number

  @column()
  declare savingFund: number

  @column()
  declare employerSocialSecurity: number

  @column()
  declare employeeSocialSecurity: number

  @column()
  declare employerHealthWelfare: number

  @column()
  declare employeeHealthWelfare: number

  @column()
  declare tax: number

  @column()
  declare grandTotalIncome: number

  @column()
  declare grandTotalDeduction: number

  @column()
  declare netPaid: number

  @column()
  declare employerContributionTotal: number

  @column()
  declare twoSides: number

  @column.date()
  declare payslipDate: DateTime | null

  @column()
  declare payslipNumber: string | null

  @column()
  declare staffSignature: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare createdBy: string | null

  @column()
  declare updatedBy: string | null
}
