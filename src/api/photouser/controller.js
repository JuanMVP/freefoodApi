import { success, notFound } from '../../services/response/'
import { Photouser } from '.'

const uploadService = require('../../services/upload/')
export const create = (req, res, next) => {
// export const create = ({ bodymen: { body } }, res, next) => {
  uploadService.uploadFromBinary(req.file.buffer)
    .then(json => Photo.create({
      userId: req.body.userId,
      imgurLink: json.data.link,
      deletehash: json.data.deletehash
    }))
    .then((photo) => photo.view(true))
    .then(success(res, 201))
    .catch(next)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Photouser.count(query)
    .then(count => Photouser.find(query, select, cursor)
      .then((photousers) => ({
        count,
        rows: photousers.map((photouser) => photouser.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Photouser.findById(params.id)
    .then(notFound(res))
    .then((photouser) => photouser ? photouser.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Photouser.findById(params.id)
    .then(notFound(res))
    .then((photouser) => photouser ? Object.assign(photouser, body).save() : null)
    .then((photouser) => photouser ? photouser.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Photouser.findById(params.id)
    .then(notFound(res))
    .then((photouser) => photouser ? photouser.remove() : null)
    .then(success(res, 204))
    .catch(next)
