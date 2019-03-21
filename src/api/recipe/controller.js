import { success, notFound } from '../../services/response/'
import { Recipe } from '.'

const uploadService = require('../../services/upload/')


/*export const create = ({ bodymen: { body } }, res, next) =>
  Recipe.create(body)
    .then((recipe) => recipe.view(true))
    .then(success(res, 201))
    .catch(next)*/


export const create = (req, res, next) => {
  let recetaCreada;

  uploadService.uploadFromBinary(req.file.buffer)
    .then((json) =>
      Recipe.create({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        dinnerGuest: req.body.dinnerGuest,
        picture: json.data.link
      })
      )}
export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Recipe.count(query)
    .then(count => Recipe.find(query, select, cursor)
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


  export const addFavorite = ({ user, params }, res, next) =>
    User.findByIdAndUpdate(user.id, { $addToSet: { favs: params.id } }, { new: true })
      .then(success(res, 200))
      .catch(next)

  export const delFavorite = ({ user, params }, res, next) =>
    User.findByIdAndUpdate(user.id, { $pull: { favs: params.id } }, { new: true })
      .then(success(res, 200))
      .catch(next)


  export const userFavorites = ({ user, querymen: { query, select, cursor } }, res, next) => {
    query['_id'] = { $in: user.favs }
    Property
      .find(query, select, cursor)
      .exec(function (err, properties) {
        Promise.all(properties.map(function (property) {
          return queryFirstPhoto(property)
        }))
          .then((result) => ({
            count: result.length,
            rows: result
          }))
          .then(success(res))
          .catch(next)
      })
  }
