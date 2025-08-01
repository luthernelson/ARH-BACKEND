import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Projet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code_projet: string

  @column()
  declare nom_projet: string

  @column()
  declare client: string | null

  @column()
  declare logo_projet: string | null

  @column.date()
  declare date_debut: DateTime | null

  @column.date()
  declare date_fin: DateTime | null

  /** Priorité : 'high' | 'low' */
  @column()
  declare priorite: 'high' | 'low' | null

  @column()
  declare valeur_projet: number | null

  @column()
  declare heures_travail: string | null

  @column()
  declare temps_sup: string | null

  @column()
  declare description: string | null

  @column()
  declare membres: string[] | null

  @column()
  declare chef_equipe: string[] | null

  @column()
  declare gestionnaire_projet: string[] | null

  /** Statut : 'active' | 'inactive' */
  @column()
  declare statut: 'active' | 'inactive' | null

  /** Tags : tableau de 'High', 'Medium', 'Low' */
  @column()
  declare tags: Array<'High' | 'Medium' | 'Low'> | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
