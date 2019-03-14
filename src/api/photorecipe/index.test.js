import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Photorecipe } from '.'

const app = () => express(apiRoot, routes)

let photorecipe

beforeEach(async () => {
  photorecipe = await Photorecipe.create({})
})

test('POST /photorecipes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ deleteHash: 'test', imgurLink: 'test', recipeId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.deleteHash).toEqual('test')
  expect(body.imgurLink).toEqual('test')
  expect(body.recipeId).toEqual('test')
})

test('GET /photorecipes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /photorecipes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${photorecipe.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(photorecipe.id)
})

test('GET /photorecipes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /photorecipes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${photorecipe.id}`)
    .send({ deleteHash: 'test', imgurLink: 'test', recipeId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(photorecipe.id)
  expect(body.deleteHash).toEqual('test')
  expect(body.imgurLink).toEqual('test')
  expect(body.recipeId).toEqual('test')
})

test('PUT /photorecipes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ deleteHash: 'test', imgurLink: 'test', recipeId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /photorecipes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${photorecipe.id}`)
  expect(status).toBe(204)
})

test('DELETE /photorecipes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
