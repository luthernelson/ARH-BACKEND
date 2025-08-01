import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstName: string

  @column()
  declare lastName: string | null

  @column()
  declare username: string

  @column()
  declare email: string | null

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare phoneNumber: string

  @column()
  declare company: string | null

  @column()
  declare profileImage: string | null

  @column()
  declare status: 'actif' | 'inactif'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
