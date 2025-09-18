import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class LeaveRequest extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare employee_id: number

  @column()
  declare leave_type_id: number

  @column.dateTime()
  declare start_date: DateTime

  @column.dateTime()
  declare end_date: DateTime

  @column()
  declare total_days: string

  @column()
  declare reason: string

  @column()
  declare status: string

  @column()
  declare created_by: number

  @column()
  declare updated_by: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
