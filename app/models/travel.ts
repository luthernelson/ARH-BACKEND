import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TravelRequest extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare employeeId: number

  @column()
  declare departmentPositionId: number | null

  @column()
  declare destination: string | null

  @column.date()
  declare startDate: DateTime | null

  @column.date()
  declare endDate: DateTime | null

  @column()
  declare purpose: string | null

  @column()
  declare grant: string | null

  @column()
  declare transportation: string | null

  @column()
  declare accommodation: string | null

  @column()
  declare requestBySignature: string | null

  @column()
  declare requestByFullname: string | null

  @column.date()
  declare requestByDate: DateTime | null

  @column()
  declare remarks: string | null

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare createdBy: string | null

  @column()
  declare updatedBy: string | null
}
