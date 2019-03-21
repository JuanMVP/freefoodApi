import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy, addFavorite, userFavorites, delFavorite } from './controller'
import { schema } from './model'
import { password as passwordAuth, master, token } from '../../services/passport'
export Recipe, { schema } from './model'

const router = new Router()
const { name, description, ingredients, dinnerGuest, picture } = schema.tree

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

/**
 * @api {post} /recipes Create recipe
 * @apiName CreateRecipe
 * @apiGroup Recipe
 * @apiParam name Recipe's name.
 * @apiParam description Recipe's description.
 * @apiParam ingredients Recipe's ingredients.
 * @apiParam dinnerGuest Recipe's dinnerGuest.
 * @apiSuccess {Object} recipe Recipe's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Recipe not found.
 */
router.post('/',
  token({ required: true}),
  upload.single('picture'),
  //body({ name, description, ingredients, dinnerGuest, picture }),
  create)

/**
 * @api {get} /recipes Retrieve recipes
 * @apiName RetrieveRecipes
 * @apiGroup Recipe
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of recipes.
 * @apiSuccess {Object[]} rows List of recipes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

  /**
 * @api {get} /recipes/fav Retrieve the favorites recipes of a user
 * @apiName RetrieveFavsRecipes
 * @apiGroup Recipe
 * @apiPermission user
 * @apiParam {String} [name] Name of the recipes (optional)
 * @apiParam {String} [description] Address of the recipes (optional)
 * @apiParam {String} [ingredients] City of the recipes (optional)
 * @apiParam {String} [dinnerGuest] Category of the recipes (optional)
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of recipes.
 * @apiSuccess {Object[]} rows List of recipes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only
 */

router.get('/fav',
token({ required: true}),
query(),
userFavorites)

/**
 * @api {get} /recipes/:id Retrieve recipe
 * @apiName RetrieveRecipe
 * @apiGroup Recipe
 * @apiSuccess {Object} recipe Recipe's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Recipe not found.
 */
router.get('/:id',
  show)

  

/**
 * @api {put} /recipes/:id Update recipe
 * @apiName UpdateRecipe
 * @apiGroup Recipe
 * @apiParam name Recipe's name.
 * @apiParam description Recipe's description.
 * @apiParam ingredients Recipe's ingredients.
 * @apiParam dinnerGuest Recipe's dinnerGuest.
 * @apiSuccess {Object} recipe Recipe's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Recipe not found.
 */
router.put('/:id',
  token({ required: true}),
  body({ name, description, ingredients, dinnerGuest,picture }),
  update)

/**
 * @api {delete} /recipes/:id Delete recipe
 * @apiName DeleteRecipe
 * @apiGroup Recipe
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Recipe not found.
 */
router.delete('/:id',
  token({ required: true}),
  destroy)

/**
 * @api {post} /recipes/fav/:id Add an recipes as favorite
 * @apiName AddRecipeFav
 * @apiGroup Recipe
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} user Users's data.
 * @apiError 401 user access only.
 */
  router.post('/fav/:id',
  token({ required: true}),
  addFavorite)




/**
 * @api {delete} /recipes/fav/:id Delete an recipe as a favorite
 * @apiName DeleteFavRecipe
 * @apiGroup Recipe
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 user access only.
 */

router.delete('/fav/:id',
  token({ required: true}),
  delFavorite)

  



export default router
