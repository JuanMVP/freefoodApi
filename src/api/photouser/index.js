import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Photouser, { schema } from './model'

const router = new Router()
const { deleteHash, imgurLink, userId } = schema.tree

/**
 * @api {post} /photousers Create photouser
 * @apiName CreatePhotouser
 * @apiGroup Photouser
 * @apiParam deleteHash Photouser's deleteHash.
 * @apiParam imgurLink Photouser's imgurLink.
 * @apiParam userId Photouser's userId.
 * @apiSuccess {Object} photouser Photouser's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photouser not found.
 */
router.post('/',
  body({ deleteHash, imgurLink, userId }),
  create)

/**
 * @api {get} /photousers Retrieve photousers
 * @apiName RetrievePhotousers
 * @apiGroup Photouser
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of photousers.
 * @apiSuccess {Object[]} rows List of photousers.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /photousers/:id Retrieve photouser
 * @apiName RetrievePhotouser
 * @apiGroup Photouser
 * @apiSuccess {Object} photouser Photouser's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photouser not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /photousers/:id Update photouser
 * @apiName UpdatePhotouser
 * @apiGroup Photouser
 * @apiParam deleteHash Photouser's deleteHash.
 * @apiParam imgurLink Photouser's imgurLink.
 * @apiParam userId Photouser's userId.
 * @apiSuccess {Object} photouser Photouser's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photouser not found.
 */
router.put('/:id',
  body({ deleteHash, imgurLink, userId }),
  update)

/**
 * @api {delete} /photousers/:id Delete photouser
 * @apiName DeletePhotouser
 * @apiGroup Photouser
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Photouser not found.
 */
router.delete('/:id',
  destroy)

export default router
