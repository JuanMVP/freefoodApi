import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Recipe } from '.'

const app = () => express(apiRoot, routes)

let recipe

beforeEach(async () => {
  recipe = await Recipe.create({})
})

test('POST /recipes 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', description: 'test', ingredients: 'test', dinnerGuest: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.ingredients).toEqual('test')
  expect(body.dinnerGuest).toEqual('test')
})

test('GET /recipes 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /recipes/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${recipe.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(recipe.id)
})

test('GET /recipes/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /recipes/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${recipe.id}`)
    .send({ name: 'test', description: 'test', ingredients: 'test', dinnerGuest: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(recipe.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.ingredients).toEqual('test')
  expect(body.dinnerGuest).toEqual('test')
})

test('PUT /recipes/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', description: 'test', ingredients: 'test', dinnerGuest: 'test' })
  expect(status).toBe(404)
})

test('DELETE /recipes/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${recipe.id}`)
  expect(status).toBe(204)
})

test('DELETE /recipes/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
