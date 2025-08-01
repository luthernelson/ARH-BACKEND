import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Employee from '#models/employee'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Presence extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.date()
  declare date: DateTime

  @column()
  declare checkIn: string

  @column()
  declare checkOut: string

  @column()
  declare breakTime: string

  @column()
  declare lateTime: string

  @column()
  declare productionHours: string

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Employee)
  declare employee: BelongsTo<typeof Employee>
}
