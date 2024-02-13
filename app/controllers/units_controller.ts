// import type { HttpContext } from '@adonisjs/core/http'
import Unit from "#models/unit"

export default class UnitsController {
    async getAllUnits() {
        return await Unit
        .query()
        .orderBy('id', 'asc')
    }
}