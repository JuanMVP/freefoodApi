import { success, notFound } from '../../services/response/'
import { Recipe } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Recipe.create(body)
    .then((recipe) => recipe.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Recipe.count(query)
    .then(count => Recipe.find(query, select, cursor)
      .populate('picture', 'imgur_link')
      .exec()
      .then((recipes) => ({
        count,
        rows: recipes.map((recipe) => recipe.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Recipe.findById(params.id)
    .then(notFound(res))
      .populate('picture', 'imgur_link')
      .exec()
    .then((recipe) => recipe ? recipe.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Recipe.findById(params.id)
    .then(notFound(res))
    .then((recipe) => recipe ? Object.assign(recipe, body).save() : null)
    .then((recipe) => recipe ? recipe.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Recipe.findById(params.id)
    .then(notFound(res))
    .then((recipe) => recipe ? recipe.remove() : null)
    .then(success(res, 204))
    .catch(next)
