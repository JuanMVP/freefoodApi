import { success, notFound } from '../../services/response/'
import { Restaurant } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Restaurant.create(body)
    .then((restaurant) => restaurant.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Restaurant.count(query)
    .then(count => Restaurant.find(query, select, cursor)
      .populate('intolerance', 'name')
      .exec()
      .then((restaurants) => ({
        count,
        rows: restaurants.map((restaurant) => restaurant.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Restaurant.findById(params.id)
    .populate('intolerance', 'name')
    .exec()
    .then(notFound(res))
    .then((restaurant) => restaurant ? restaurant.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Restaurant.findById(params.id)
    .then(notFound(res))
    .then((restaurant) => restaurant ? Object.assign(restaurant, body).save() : null)
    .then((restaurant) => restaurant ? restaurant.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Restaurant.findById(params.id)
    .then(notFound(res))
    .then((restaurant) => restaurant ? restaurant.remove() : null)
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