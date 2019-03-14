import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Intolerance } from '.'

const app = () => express(apiRoot, routes)

let intolerance

beforeEach(async () => {
  intolerance = await Intolerance.create({})
})

test('POST /intolerances 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
})

test('GET /intolerances 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /intolerances/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${intolerance.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(intolerance.id)
})

test('GET /intolerances/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /intolerances/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${intolerance.id}`)
    .send({ name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(intolerance.id)
  expect(body.name).toEqual('test')
})

test('PUT /intolerances/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /intolerances/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${intolerance.id}`)
  expect(status).toBe(204)
})

test('DELETE /intolerances/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
