import type { HttpContext } from '@adonisjs/core/http'
import vocabulary from "#models/vocabulary"

export default class VocabulariesController {
    async getAllVocab() {
        return await vocabulary.all()
    }

    async getVocab({params} : HttpContext) {
        return await vocabulary
        .query()
        .where('unit_id', params.id)
    }
}