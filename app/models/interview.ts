import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export class Interview extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare candidate_name: string

  @column()
  declare phone: string | null

  @column()
  declare resume: string | null

  @column()
  declare job_position: string

  @column()
  declare interviewer_name: string | null

  @column.dateTime()
  declare interview_date: DateTime

  @column()
  declare start_time: string | null

  @column()
  declare end_time: string | null

  @column()
  declare interview_mode: 'in-person' | 'virtual' | null

  @column()
  declare interview_status: 'scheduled' | 'completed' | 'cancelled'

  @column()
  declare score: number | null

  @column()
  declare feedback: string | null

  @column()
  declare reference_info: string | null

  @column()
  declare created_by: string | null

  @column()
  declare updated_by: string | null

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
