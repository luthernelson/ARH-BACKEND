import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Candidat extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare first_name: string

  @column()
  declare last_name: string

  @column()
  declare email: string

  @column()
  declare place_birtday: string

  @column()
  declare job_position: string

  @column()
  declare telephone: number

  @column()
  declare status: string

  @column()
  declare cv: string

  @column.dateTime({ autoCreate: true })
  declare birthday: DateTime

  @column.dateTime({ autoCreate: true })
  declare application_date: DateTime

  @column.dateTime({ autoCreate: true })
  declare cree_a: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare mis_a_jour_a: DateTime
}
