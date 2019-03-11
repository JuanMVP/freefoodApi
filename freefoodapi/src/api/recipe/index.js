import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Recipe, { schema } from './model'

const router = new Router()
const { name, description, ingredients, dinnerGuest } = schema.tree

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
  body({ name, description, ingredients, dinnerGuest }),
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
  body({ name, description, ingredients, dinnerGuest }),
  update)

/**
 * @api {delete} /recipes/:id Delete recipe
 * @apiName DeleteRecipe
 * @apiGroup Recipe
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Recipe not found.
 */
router.delete('/:id',
  destroy)

export default router
