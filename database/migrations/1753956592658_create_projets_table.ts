import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Projets extends BaseSchema {
  protected tableName = 'projets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('code_projet').notNullable().unique()
      table.string('nom_projet').notNullable()
      table.string('client').nullable()
      table.string('logo_projet').nullable()
      table.date('date_debut').nullable()
      table.date('date_fin').nullable()

      // Enum simulée avec string check possible
      table.string('priorite').nullable() // 'high', 'low'
      table.decimal('valeur_projet', 15, 2).nullable()
      table.string('heures_travail').nullable()
      table.string('temps_sup').nullable()
      table.text('description').nullable()

      table.jsonb('membres').nullable()
      table.jsonb('chef_equipe').nullable()
      table.jsonb('gestionnaire_projet').nullable()

      table.string('statut').nullable() // 'active', 'inactive'
      table.jsonb('tags').nullable() // Ex: ["High", "Low"]

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
