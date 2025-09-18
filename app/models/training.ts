import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Training extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare training_type: number

  @column()
  declare trainer: number

  @column()
  declare employees: string[]

  @column()
  declare training_cost: number

  @column()
  declare description: DateTime

  @column()
  declare status: boolean

  @column.date()
  declare startDate: DateTime

  @column.date()
  declare endDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare createdBy: string

  @column()
  declare updatedBy: string
}
