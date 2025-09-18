import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class LeaveRequestApproval extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare leave_request_id: number

  @column()
  declare approver_role: string

  @column()
  declare approver_name: string

  @column()
  declare approver_signature: string

  @column.dateTime()
  declare approver_date: DateTime

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
