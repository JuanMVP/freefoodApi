import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Photorecipe, { schema } from './model'

const router = new Router()
const { deleteHash, imgurLink, recipeId } = schema.tree

/**
 * @api {post} /photorecipes Create photorecipe
 * @apiName CreatePhotorecipe
 * @apiGroup Photorecipe
 * @apiParam deleteHash Photorecipe's deleteHash.
 * @apiParam imgurLink Photorecipe's imgurLink.
 * @apiParam recipeId Photorecipe's recipeId.
 * @apiSuccess {Object} photorecipe Photorecipe's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photorecipe not found.
 */
router.post('/',
  body({ deleteHash, imgurLink, recipeId }),
  create)

/**
 * @api {get} /photorecipes Retrieve photorecipes
 * @apiName RetrievePhotorecipes
 * @apiGroup Photorecipe
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of photorecipes.
 * @apiSuccess {Object[]} rows List of photorecipes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /photorecipes/:id Retrieve photorecipe
 * @apiName RetrievePhotorecipe
 * @apiGroup Photorecipe
 * @apiSuccess {Object} photorecipe Photorecipe's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photorecipe not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /photorecipes/:id Update photorecipe
 * @apiName UpdatePhotorecipe
 * @apiGroup Photorecipe
 * @apiParam deleteHash Photorecipe's deleteHash.
 * @apiParam imgurLink Photorecipe's imgurLink.
 * @apiParam recipeId Photorecipe's recipeId.
 * @apiSuccess {Object} photorecipe Photorecipe's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photorecipe not found.
 */
router.put('/:id',
  body({ deleteHash, imgurLink, recipeId }),
  update)

/**
 * @api {delete} /photorecipes/:id Delete photorecipe
 * @apiName DeletePhotorecipe
 * @apiGroup Photorecipe
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Photorecipe not found.
 */
router.delete('/:id',
  destroy)

export default router
