import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'trainers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('role').nullable()
      table.string('email').notNullable().unique()
      table.string('profile_picture').nullable()

      // description devrait être un texte, pas DateTime
      table.text('description').nullable()

      table.boolean('status').defaultTo(true)

      table.string('created_by').nullable()
      table.string('updated_by').nullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
