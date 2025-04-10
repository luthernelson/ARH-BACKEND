import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Formation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare titre: string

  @column()
  declare foramteurname: string

  @column()
  declare description: string

  @column.dateTime()
  declare dateDebut: DateTime

  @column.dateTime()
  declare dateFin: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
