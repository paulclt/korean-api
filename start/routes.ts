/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import LevelsController from '#controllers/levels_controller'
import UnitsController from '#controllers/units_controller'
import VocabulariesController from '#controllers/vocabularies_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

/*
|--------------------------------------------------------------------------
| Routes for level
|--------------------------------------------------------------------------
*/
router.get('/levels', [LevelsController, 'getAllLevels'])

/*
|--------------------------------------------------------------------------
| Routes for unit
|--------------------------------------------------------------------------
*/
router.get('/units', [UnitsController, 'getAllUnits'])

/*
|--------------------------------------------------------------------------
| Routes for vocabulary
|--------------------------------------------------------------------------
*/
router.get('/vocab', [VocabulariesController, 'getAllVocab'])
router.get('/vocab/:id', [VocabulariesController, 'getVocab'])
