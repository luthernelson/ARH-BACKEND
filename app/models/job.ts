import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare job_title: string

  @column()
  declare job_description: string

  @column()
  declare job_category: string

  @column()
  declare job_type: string

  @column()
  declare job_level: string

  @column()
  declare experience: string

  @column()
  declare qualification: string

  @column()
  declare gender: string

  @column()
  declare min_salary: string

  @column()
  declare max_salary: string

  @column()
  declare skills: string

  @column()
  declare job_image_url: string

  @column()
  declare job_image_name: string

  @column.date()
  declare expired_date: DateTime

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare state: string

  @column()
  declare country: string

  @column()
  declare zip_code: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
