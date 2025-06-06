import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Jobs extends BaseSchema {
  protected tableName = 'jobs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('job_title').notNullable()
      table.text('job_description').notNullable()
      table.string('job_category').notNullable()
      table.string('job_type').notNullable()
      table.string('job_level').notNullable()
      table.string('experience').notNullable()
      table.string('qualification').notNullable()
      table.string('gender').notNullable()
      table.string('min_salary').nullable()
      table.string('max_salary').nullable()
      table.text('skills').notNullable()
      table.string('job_image_url').nullable()
      table.string('job_image_name').nullable()
      table.date('expired_date').notNullable()
      table.string('address').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('country').notNullable()
      table.string('zip_code').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
