import { success, notFound } from '../../services/response/'
import { Photorecipe } from '.'

const uploadService = require('../../services/upload/')
export const create = (req, res, next) => {
// export const create = ({ bodymen: { body } }, res, next) => {
  uploadService.uploadFromBinary(req.file.buffer)
    .then(json => Photo.create({
      recipeId: req.body.recipeId,
      imgurLink: json.data.link,
      deletehash: json.data.deletehash
    }))
    .then((photo) => photo.view(true))
    .then(success(res, 201))
    .catch(next)
}
export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Photorecipe.count(query)
    .then(count => Photorecipe.find(query, select, cursor)
      .then((photorecipes) => ({
        count,
        rows: photorecipes.map((photorecipe) => photorecipe.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Photorecipe.findById(params.id)
    .then(notFound(res))
    .then((photorecipe) => photorecipe ? photorecipe.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Photorecipe.findById(params.id)
    .then(notFound(res))
    .then((photorecipe) => photorecipe ? Object.assign(photorecipe, body).save() : null)
    .then((photorecipe) => photorecipe ? photorecipe.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Photorecipe.findById(params.id)
    .then(notFound(res))
    .then((photorecipe) => photorecipe ? photorecipe.remove() : null)
    .then(success(res, 204))
    .catch(next)
