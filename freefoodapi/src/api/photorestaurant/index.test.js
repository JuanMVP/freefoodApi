import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Photorestaurant } from '.'

const app = () => express(apiRoot, routes)

let photorestaurant

beforeEach(async () => {
  photorestaurant = await Photorestaurant.create({})
})

test('POST /photorestaurants 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ deleteHash: 'test', imgurLink: 'test', restaurantId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.deleteHash).toEqual('test')
  expect(body.imgurLink).toEqual('test')
  expect(body.restaurantId).toEqual('test')
})

test('GET /photorestaurants 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /photorestaurants/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${photorestaurant.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(photorestaurant.id)
})

test('GET /photorestaurants/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /photorestaurants/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${photorestaurant.id}`)
    .send({ deleteHash: 'test', imgurLink: 'test', restaurantId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(photorestaurant.id)
  expect(body.deleteHash).toEqual('test')
  expect(body.imgurLink).toEqual('test')
  expect(body.restaurantId).toEqual('test')
})

test('PUT /photorestaurants/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ deleteHash: 'test', imgurLink: 'test', restaurantId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /photorestaurants/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${photorestaurant.id}`)
  expect(status).toBe(204)
})

test('DELETE /photorestaurants/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
