import { BaseSchema } from '@adonisjs/lucid/schema'

export default class EnfantEmployes extends BaseSchema {
  protected tableName = 'enfant_employes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // identifiant
      table.integer('identifiant_employe').unsigned().notNullable()
      table.string('nom').notNullable()
      table.date('date_de_naissance').notNullable()
      table.string('cree_par').notNullable()
      table.string('mis_a_jour_par').notNullable()
      table.timestamp('created_at', { useTz: true }) // créé_à
      table.timestamp('updated_at', { useTz: true }) // mis à jour à

      // (Optionnel) Si tu as une table "employes", ajoute la contrainte de clé étrangère
      // table.foreign('identifiant_employe').references('id').inTable('employes').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
