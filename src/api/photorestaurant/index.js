import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
import { master, token } from '../../services/passport'

export Photorestaurant, { schema } from './model'

const router = new Router()
const { deleteHash, imgurLink, restaurantId } = schema.tree

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

/**
 * @api {post} /photorestaurants Create photorestaurant
 * @apiName CreatePhotorestaurant
 * @apiGroup Photorestaurant
 * @apiParam deleteHash Photorestaurant's deleteHash.
 * @apiParam imgurLink Photorestaurant's imgurLink.
 * @apiParam restaurantId Photorestaurant's restaurantId.
 * @apiSuccess {Object} photorestaurant Photorestaurant's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photorestaurant not found.
 */
router.post('/',
  //body({ deleteHash, imgurLink, restaurantId }),
  token({ required: true }),
  upload.single('photo'),
  create)

/**
 * @api {get} /photorestaurants Retrieve photorestaurants
 * @apiName RetrievePhotorestaurants
 * @apiGroup Photorestaurant
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of photorestaurants.
 * @apiSuccess {Object[]} rows List of photorestaurants.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /photorestaurants/:id Retrieve photorestaurant
 * @apiName RetrievePhotorestaurant
 * @apiGroup Photorestaurant
 * @apiSuccess {Object} photorestaurant Photorestaurant's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photorestaurant not found.
 */
router.get('/:id',
  master(),
  show)

/**
 * @api {put} /photorestaurants/:id Update photorestaurant
 * @apiName UpdatePhotorestaurant
 * @apiGroup Photorestaurant
 * @apiParam deleteHash Photorestaurant's deleteHash.
 * @apiParam imgurLink Photorestaurant's imgurLink.
 * @apiParam restaurantId Photorestaurant's restaurantId.
 * @apiSuccess {Object} photorestaurant Photorestaurant's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Photorestaurant not found.
 */
router.put('/:id',
  token({ required: true }),
  body({ deleteHash, imgurLink }),
  update)

/**
 * @api {delete} /photorestaurants/:id Delete photorestaurant
 * @apiName DeletePhotorestaurant
 * @apiGroup Photorestaurant
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Photorestaurant not found.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
