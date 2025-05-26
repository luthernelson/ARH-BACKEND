import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Candidat extends BaseModel {
  @column({ isPrimary: true })
  declare identifiant: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare email: string

  @column()
  declare placeBirtday: string

  @column()
  declare jobPosition: string

  @column()
  declare telephone: string

  @column()
  declare status: string

  @column()
  declare cv: string

  @column.dateTime({ autoCreate: true })
  declare birthday: DateTime

  @column.dateTime({ autoCreate: true })
  declare applicationDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare cree_a: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare mis_a_jour_a: DateTime
}
