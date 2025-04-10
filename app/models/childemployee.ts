import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class EnfantEmploye extends BaseModel {
  @column({ isPrimary: true })
  declare identifiant: number

  @column()
  declare identifiantEmploye: number

  @column()
  declare nom: string

  @column.date()
  declare dateDeNaissance: DateTime

  @column()
  declare creePar: string

  @column()
  declare misAJourPar: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
