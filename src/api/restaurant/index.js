import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body, Schema } from 'bodymen'
import { create, index, show, update, destroy, addFavorite, userFavorites, delFavorite } from './controller'
import { schema } from './model'
import { master, token } from '../../services/passport'
export Restaurant, { schema } from './model'

const router = new Router()
const { name, address, intolerance, timetable, loc } = schema.tree

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const restaurantsSchema = new Schema({
  name: {
    type: RegExp,
    paths: ['name']
  },
  address:{
    type: RegExp,
    paths: ['address']
  },
  intolerance:{
    type: RegExp,
    paths: ['intolerance']
  },
  timetable:{
    type: RegExp,
    paths: ['timetable']
  },
  near: {
    paths: ['loc']
  }
}, {near: true})

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
  //body({ name, address, intolerance, timetable, loc }),
  upload.single('picture'),
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
  

  query(restaurantsSchema),
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
  token({ required: true}),

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
  token({ required: true}),

  destroy)
/**
 * @api {post} /restaurants/fav/:id Add an restaurant as favorite
 * @apiName AddRestaurantFav
 * @apiGroup Restaurant
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} user Users's data.
 * @apiError 401 user access only.
 */
router.post('/fav/:id',
  token({ required: true}),
  addFavorite)

/**
 * @api {get} /restaurants/fav Retrieve the favorites restaurants of a user
 * @apiName RetrieveFavsRestaurants
 * @apiGroup Restaurant
 * @apiPermission user
 * @apiParam {String} [name] Name of the restaurant (optional)
 * @apiParam {String} [address] Address of the restaurant (optional)
 * @apiParam {String} [intolerance] City of the restaurant (optional)
 * @apiParam {String} [timetable] Category of the restaurant (optional)
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of restaurants.
 * @apiSuccess {Object[]} rows List of restaurants.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only
 */

router.get('/fav',
  token({ required: true}),
  query(restaurantsSchema),
  userFavorites)


/**
 * @api {delete} /restaurants/fav/:id Delete an restaurant as a favorite
 * @apiName DeleteFavRestaurant
 * @apiGroup Restaurant
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 user access only.
 */

router.delete('/fav/:id',
  token({ required: true}),
  delFavorite)

export default router
