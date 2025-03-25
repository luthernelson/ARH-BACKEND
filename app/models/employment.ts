import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Employment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare employee_id: number

  @column()
  declare employment_type_id: number

  @column.dateTime()
  declare start_date: DateTime

  @column.dateTime()
  declare probation_end_date: DateTime | null

  @column.dateTime()
  declare end_date: DateTime | null

  @column()
  declare position_id: number

  @column()
  declare department_id: number

  @column()
  declare work_location_id: number

  @column()
  declare position_salary: number

  @column()
  declare probation_salary: number | null

  @column()
  declare supervisor_id: number | null

  @column()
  declare employee_tax: number | null

  @column()
  declare fte: number | null

  @column()
  declare active: boolean

  @column()
  declare health_welfare: boolean

  @column()
  declare pvd: boolean

  @column()
  declare saving_fund: boolean

  @column()
  declare social_security_id: string | null

  @column()
  declare grant_item_id: number | null

  @column()
  declare created_by: string | null

  @column()
  declare updated_by: string | null

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
