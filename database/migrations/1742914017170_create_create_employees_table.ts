import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Employees extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('staff_id').notNullable().unique()
      table.enum('subsidiary', ['SMRU', 'BHF']).notNullable()
      table
        .integer('user_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
      table.string('first_name').notNullable()
      table.string('middle_name').nullable()
      table.string('last_name').notNullable()
      table.string('email').nullable().unique()
      table.string('profile_picture').nullable()
      table.string('gender').notNullable()
      table.dateTime('date_of_birth').notNullable()
      table.enum('status', ['Expats', 'Local ID', 'Local non ID']).notNullable()
      table.string('religion').nullable()
      table.string('birth_place').nullable()
      table.string('identification_number').nullable()
      table.string('social_security_number').nullable()
      table.string('tax_number').nullable()
      table.string('passport_number').nullable()
      table.string('bank_name').nullable()
      table.string('bank_branch').nullable()
      table.string('bank_account_name').nullable()
      table.string('bank_account_number').nullable()
      table.string('office_phone').nullable()
      table.string('mobile_phone').nullable()
      table.string('permanent_address').nullable()
      table.string('current_address').nullable()
      table.string('stay_with').nullable()
      table.boolean('military_status').notNullable().defaultTo(false)
      table.string('marital_status').nullable()
      table.string('spouse_name').nullable()
      table.string('spouse_occupation').nullable()
      table.string('father_name').nullable()
      table.string('father_occupation').nullable()
      table.string('mother_name').nullable()
      table.string('mother_occupation').nullable()
      table.string('driver_license_number').nullable()
      table.string('created_by').nullable()
      table.string('updated_by').nullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
