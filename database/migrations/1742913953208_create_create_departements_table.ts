import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Departements extends BaseSchema {
  protected tableName = 'departements'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('identifiant') // Clé primaire auto-incrémentée
      table.string('nom').notNullable().unique() // Nom unique pour éviter les doublons
      table.text('description').nullable() // Champ description optionnel
      table.string('cree_par').nullable()
      table.string('mis_a_jour_par').nullable()
      table.timestamp('cree_a', { useTz: true }).defaultTo(this.now()) // Date de création
      table.timestamp('mis_a_jour_a', { useTz: true }).defaultTo(this.now()) // Date de mise à jour
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
