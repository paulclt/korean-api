import type { HttpContext } from '@adonisjs/core/http'
import vocabulary from "#models/vocabulary"

export default class VocabulariesController {
    async getAllVocab() {
        return await vocabulary
        .query()
        .orderBy('id', 'asc')
    }

    async getVocab({params} : HttpContext) {
        return await vocabulary
        .query()
        .where('unit_id', params.id)
    }
}