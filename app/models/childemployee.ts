import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class EnfantEmploye extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare identifiant_employe: number

  @column()
  declare nom: string

  @column.date()
  declare date_de_naissance: DateTime

  @column()
  declare cree_par: string

  @column()
  declare mis_a_jour_par: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
