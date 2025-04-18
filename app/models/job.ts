import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.date()
  declare date: DateTime

  @column()
  declare candidateName: string

  @column()
  declare positionName: string

  @column()
  declare salaryDetail: string

  @column.date()
  declare acceptanceDeadline: DateTime

  @column()
  declare acceptanceStatus: string

  @column()
  declare note: string

  @column()
  declare createdBy: string

  @column()
  declare updatedBy: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
