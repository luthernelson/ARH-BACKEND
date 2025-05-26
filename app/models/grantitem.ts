import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class GrantItem extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare grant_id: number

  @column()
  declare bg_line: string | null

  @column()
  declare grant_position: string | null

  @column()
  declare grant_salary: number | null

  @column()
  declare grant_benefit: number | null

  @column()
  declare grant_level_of_effort: number | null

  @column()
  declare grant_position_number: number | null

  @column()
  declare grant_cost_by_monthly: number | null

  @column()
  declare grant_total_cost_by_person: number | null

  @column()
  declare grant_benefit_fte: number | null

  @column()
  declare grant_total_amount: number | null

  @column()
  declare created_by: string | null

  @column()
  declare updated_by: string | null

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
