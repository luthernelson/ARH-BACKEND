import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TravelRequestApproval extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare travelRequestId: number

  @column()
  declare approverRole: string | null

  @column()
  declare approverName: string | null

  @column()
  declare approverSignature: string | null
  @column.date()
  declare approvalDate: DateTime | null

  @column()
  declare status: string | null

  @column()
  declare createdBy: string | null

  @column()
  declare updatedBy: string | null
}
