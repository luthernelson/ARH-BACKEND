import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { GrantItem } from './grantitem.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export class Grant extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare code: string

  @column()
  declare description: string | null

  @column()
  declare end_date: string | null

  @column()
  declare created_by: string | null

  @column()
  declare updated_by: string | null

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime

  @hasMany(() => GrantItem, { foreignKey: 'grant_id' })
  declare grant_items: HasMany<typeof GrantItem>
}
