import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Restaurant, { schema } from './model'

const router = new Router()
const { name, address, intolerance, timetable, loc } = schema.tree

/**
 * @api {post} /restaurants Create restaurant
 * @apiName CreateRestaurant
 * @apiGroup Restaurant
 * @apiParam name Restaurant's name.
 * @apiParam address Restaurant's address.
 * @apiParam intolerance Restaurant's intolerance.
 * @apiParam timetable Restaurant's timetable.
 * @apiParam loc Restaurant's loc.
 * @apiSuccess {Object} restaurant Restaurant's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurant not found.
 */
router.post('/',
  body({ name, address, intolerance, timetable, loc }),
  create)

/**
 * @api {get} /restaurants Retrieve restaurants
 * @apiName RetrieveRestaurants
 * @apiGroup Restaurant
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of restaurants.
 * @apiSuccess {Object[]} rows List of restaurants.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /restaurants/:id Retrieve restaurant
 * @apiName RetrieveRestaurant
 * @apiGroup Restaurant
 * @apiSuccess {Object} restaurant Restaurant's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurant not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /restaurants/:id Update restaurant
 * @apiName UpdateRestaurant
 * @apiGroup Restaurant
 * @apiParam name Restaurant's name.
 * @apiParam address Restaurant's address.
 * @apiParam intolerance Restaurant's intolerance.
 * @apiParam timetable Restaurant's timetable.
 * @apiParam loc Restaurant's loc.
 * @apiSuccess {Object} restaurant Restaurant's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Restaurant not found.
 */
router.put('/:id',
  body({ name, address, intolerance, timetable, loc }),
  update)

/**
 * @api {delete} /restaurants/:id Delete restaurant
 * @apiName DeleteRestaurant
 * @apiGroup Restaurant
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Restaurant not found.
 */
router.delete('/:id',
  destroy)

export default router
