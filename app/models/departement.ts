import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Departement extends BaseModel {
  @column({ isPrimary: true })
  declare identifiant: number

  @column()
  declare nom: string

  @column()
  declare description: string

  @column()
  declare cree_par: string

  @column()
  declare mis_a_jour_par: string

  @column.dateTime({ autoCreate: true })
  declare cree_a: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare mis_a_jour_a: DateTime
}
