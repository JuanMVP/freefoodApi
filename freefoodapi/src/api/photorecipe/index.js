import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import { master, token } from '../../services/passport'
export Photorecipe, { schema } from './model'

const router = new Router()
const { deleteHash, imgurLink, recipeId } = schema.tree

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

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
  //body({ deleteHash, imgurLink, recipeId }),
  token({ required: true }),
  upload.single('photo'),
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
  master(),
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
  master(),
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
  token({ required: true }),
  body({ deleteHash, imgurLink }),
  update)

/**
 * @api {delete} /photorecipes/:id Delete photorecipe
 * @apiName DeletePhotorecipe
 * @apiGroup Photorecipe
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Photorecipe not found.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
