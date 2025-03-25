import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('full_name').nullable()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('status').notNullable()
      table.timestamp('last_login_at', { useTz: true }).nullable()
      table.string('created_by').notNullable()
      table.string('updated_by').notNullable()
      table.timestamp('email_verified_at', { useTz: true }).nullable()
      table.specificType('roles', 'text[]').notNullable()
      table.specificType('permissions', 'text[]').notNullable()
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
