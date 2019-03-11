import { success, notFound } from '../../services/response/'
import { Intolerance } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Intolerance.create(body)
    .then((intolerance) => intolerance.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Intolerance.count(query)
    .then(count => Intolerance.find(query, select, cursor)
      .then((intolerances) => ({
        count,
        rows: intolerances.map((intolerance) => intolerance.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Intolerance.findById(params.id)
    .then(notFound(res))
    .then((intolerance) => intolerance ? intolerance.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Intolerance.findById(params.id)
    .then(notFound(res))
    .then((intolerance) => intolerance ? Object.assign(intolerance, body).save() : null)
    .then((intolerance) => intolerance ? intolerance.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Intolerance.findById(params.id)
    .then(notFound(res))
    .then((intolerance) => intolerance ? intolerance.remove() : null)
    .then(success(res, 204))
    .catch(next)
