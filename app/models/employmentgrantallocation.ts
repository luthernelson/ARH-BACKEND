import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Employmentgrantallocation extends BaseModel {
  @column({ isPrimary: true })
  declare identifiant: number

  @column()
  declare employment_id: number

  @column()
  declare grant_items_id: number

  @column()
  declare level_of_effort: number

  @column.dateTime()
  declare active: DateTime

  @column.dateTime()
  declare start_date: DateTime

  @column()
  declare end_date: string

  @column.dateTime({ autoCreate: true })
  declare cree_a: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare mis_a_jour_a: DateTime
}
