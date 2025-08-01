import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Informations de base
      table.string('first_name').notNullable()
      table.string('last_name').nullable()
      table.string('username').notNullable().unique()
      table.string('email').nullable().unique()
      table.string('password').notNullable()
      table.string('phone_number').notNullable()
      table.string('company').nullable()

      // Image de profil
      table.string('profile_image').nullable()

      // Statut (actif/inactif)
      table.enum('status', ['actif', 'inactif']).defaultTo('actif')

      // Timestamps
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
