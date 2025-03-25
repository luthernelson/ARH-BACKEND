import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Candidats extends BaseSchema {
  protected tableName = 'candidats'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('identifiant') // Clé primaire auto-incrémentée
      table.string('nom_du_candidat').notNullable() // Nom obligatoire
      table.string('telephone').notNullable().unique() // Téléphone unique pour éviter les doublons
      table.string('cv').nullable() // Lien du CV stocké sous forme de texte (URL)
      table.timestamp('cree_a', { useTz: true }).defaultTo(this.now()) // Date de création
      table.timestamp('mis_a_jour_a', { useTz: true }).defaultTo(this.now()) // Date de mise à jour
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
