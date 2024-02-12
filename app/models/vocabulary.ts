import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Vocabulary extends BaseModel {
  static table = 'Vocabulary'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare unit_id: number

  @column()
  declare word: string

  @column() 
  declare translation: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}