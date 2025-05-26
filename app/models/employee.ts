import { DateTime } from 'luxon'
//import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
//import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare staff_id: string

  @column()
  declare departement_id: number

  @column()
  declare subsidiary: string

  @column()
  declare user_id: number | null

  @column()
  declare first_name: string

  @column()
  declare middle_name: string | null

  @column()
  declare last_name: string

  @column()
  declare email: string | null

  @column()
  declare profile_picture: string | null

  @column()
  declare gender: string

  @column.dateTime()
  declare date_of_birth: DateTime

  @column()
  declare status: string

  @column()
  declare status_employee: boolean

  @column()
  declare basic_salary: number

  @column()
  declare religion: string | null

  @column()
  declare birth_place: string | null

  @column.dateTime()
  declare date_of_commencement_service: DateTime | null

  @column()
  declare identification_number: string | null

  @column()
  declare social_security_number: string | null

  @column()
  declare tax_number: string | null

  @column()
  declare passport_number: string | null

  @column()
  declare bank_name: string | null

  @column()
  declare bank_branch: string | null

  @column()
  declare bank_account_name: string | null

  @column()
  declare bank_account_number: string | null

  @column()
  declare office_phone: string | null

  @column()
  declare mobile_phone: string | null

  @column()
  declare permanent_address: string | null

  @column()
  declare current_address: string | null

  @column()
  declare stay_with: string | null

  @column()
  declare military_status: boolean

  @column()
  declare marital_status: string | null

  @column()
  declare spouse_name: string | null

  @column()
  declare spouse_occupation: string | null

  @column()
  declare father_name: string | null

  @column()
  declare father_occupation: string | null

  @column()
  declare mother_name: string | null

  @column()
  declare mother_occupation: string | null

  @column()
  declare driver_license_number: string | null

  @column()
  declare created_by: string | null

  @column()
  declare updated_by: string | null

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
