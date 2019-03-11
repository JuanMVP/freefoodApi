import { Restaurant } from '.'

let restaurant

beforeEach(async () => {
  restaurant = await Restaurant.create({ name: 'test', address: 'test', intolerance: 'test', timetable: 'test', loc: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = restaurant.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(restaurant.id)
    expect(view.name).toBe(restaurant.name)
    expect(view.address).toBe(restaurant.address)
    expect(view.intolerance).toBe(restaurant.intolerance)
    expect(view.timetable).toBe(restaurant.timetable)
    expect(view.loc).toBe(restaurant.loc)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = restaurant.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(restaurant.id)
    expect(view.name).toBe(restaurant.name)
    expect(view.address).toBe(restaurant.address)
    expect(view.intolerance).toBe(restaurant.intolerance)
    expect(view.timetable).toBe(restaurant.timetable)
    expect(view.loc).toBe(restaurant.loc)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
