import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Intolerance, { schema } from './model'

const router = new Router()
const { name } = schema.tree

/**
 * @api {post} /intolerances Create intolerance
 * @apiName CreateIntolerance
 * @apiGroup Intolerance
 * @apiParam name Intolerance's name.
 * @apiSuccess {Object} intolerance Intolerance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Intolerance not found.
 */
router.post('/',
  body({ name }),
  create)

/**
 * @api {get} /intolerances Retrieve intolerances
 * @apiName RetrieveIntolerances
 * @apiGroup Intolerance
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of intolerances.
 * @apiSuccess {Object[]} rows List of intolerances.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /intolerances/:id Retrieve intolerance
 * @apiName RetrieveIntolerance
 * @apiGroup Intolerance
 * @apiSuccess {Object} intolerance Intolerance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Intolerance not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /intolerances/:id Update intolerance
 * @apiName UpdateIntolerance
 * @apiGroup Intolerance
 * @apiParam name Intolerance's name.
 * @apiSuccess {Object} intolerance Intolerance's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Intolerance not found.
 */
router.put('/:id',
  body({ name }),
  update)

/**
 * @api {delete} /intolerances/:id Delete intolerance
 * @apiName DeleteIntolerance
 * @apiGroup Intolerance
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Intolerance not found.
 */
router.delete('/:id',
  destroy)

export default router
