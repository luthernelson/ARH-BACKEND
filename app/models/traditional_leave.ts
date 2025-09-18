import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TraditionalLeave extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column.date()
  declare date: DateTime

  @column()
  declare createdBy: string | null

  @column()
  declare updatedBy: string | null
}
