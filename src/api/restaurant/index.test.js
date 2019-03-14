import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Restaurant } from '.'

const app = () => express(apiRoot, routes)

let restaurant

beforeEach(async () => {
  restaurant = await Restaurant.create({})
})

test('POST /restaurants 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', address: 'test', intolerance: 'test', timetable: 'test', loc: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.intolerance).toEqual('test')
  expect(body.timetable).toEqual('test')
  expect(body.loc).toEqual('test')
})

test('GET /restaurants 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /restaurants/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${restaurant.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(restaurant.id)
})

test('GET /restaurants/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /restaurants/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${restaurant.id}`)
    .send({ name: 'test', address: 'test', intolerance: 'test', timetable: 'test', loc: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(restaurant.id)
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.intolerance).toEqual('test')
  expect(body.timetable).toEqual('test')
  expect(body.loc).toEqual('test')
})

test('PUT /restaurants/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', address: 'test', intolerance: 'test', timetable: 'test', loc: 'test' })
  expect(status).toBe(404)
})

test('DELETE /restaurants/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${restaurant.id}`)
  expect(status).toBe(204)
})

test('DELETE /restaurants/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
