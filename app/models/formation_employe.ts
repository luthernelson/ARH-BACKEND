import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class FormationEmploye extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare employeeId: number

  @column()
  declare trainingId: number

  @column()
  declare status: string

  @column()
  declare createdBy: string

  @column()
  declare updatedBy: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
