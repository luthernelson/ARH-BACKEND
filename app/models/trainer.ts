import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Trainer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare role: string

  @column()
  declare email: string

  @column()
  declare profile_picture: string

  @column()
  declare description: DateTime

  @column()
  declare status: boolean

  @column()
  declare createdBy: string

  @column()
  declare updatedBy: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
