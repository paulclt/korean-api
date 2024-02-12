import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Unit extends BaseModel {
  static table = 'Unit'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare level_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}