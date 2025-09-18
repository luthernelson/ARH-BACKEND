import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Tache extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare tag: string

  @column()
  declare priority: 'low' | 'medium' | 'high'

  @column()
  declare description: string

  @column()
  declare assigneeId: number

  @column()
  declare status: 'pending' | 'in_progress' | 'completed' | 'cancelled'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'assigneeId',
  })
  declare assignee: BelongsTo<typeof User>
}
