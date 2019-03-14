import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Photouser } from '.'

const app = () => express(apiRoot, routes)

let photouser

beforeEach(async () => {
  photouser = await Photouser.create({})
})

test('POST /photousers 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ deleteHash: 'test', imgurLink: 'test', userId: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.deleteHash).toEqual('test')
  expect(body.imgurLink).toEqual('test')
  expect(body.userId).toEqual('test')
})

test('GET /photousers 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /photousers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${photouser.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(photouser.id)
})

test('GET /photousers/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /photousers/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${photouser.id}`)
    .send({ deleteHash: 'test', imgurLink: 'test', userId: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(photouser.id)
  expect(body.deleteHash).toEqual('test')
  expect(body.imgurLink).toEqual('test')
  expect(body.userId).toEqual('test')
})

test('PUT /photousers/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ deleteHash: 'test', imgurLink: 'test', userId: 'test' })
  expect(status).toBe(404)
})

test('DELETE /photousers/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${photouser.id}`)
  expect(status).toBe(204)
})

test('DELETE /photousers/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
