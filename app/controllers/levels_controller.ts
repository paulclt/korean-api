// import type { HttpContext } from '@adonisjs/core/http'
import Level from "#models/level";

export default class LevelsController {
    async getAllLevels() {
        return await Level.all()
    }
}