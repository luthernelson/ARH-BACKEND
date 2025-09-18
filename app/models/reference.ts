import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Reference extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare jobTitle: string

  @column()
  declare candidate_id: number

  @column()
  declare entreprise_name: string

  @column()
  declare entreprise_adresse: string

  @column()
  declare phone_entreprise: string

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
