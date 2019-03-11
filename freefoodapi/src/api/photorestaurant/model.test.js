import { Photorestaurant } from '.'

let photorestaurant

beforeEach(async () => {
  photorestaurant = await Photorestaurant.create({ deleteHash: 'test', imgurLink: 'test', restaurantId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = photorestaurant.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(photorestaurant.id)
    expect(view.deleteHash).toBe(photorestaurant.deleteHash)
    expect(view.imgurLink).toBe(photorestaurant.imgurLink)
    expect(view.restaurantId).toBe(photorestaurant.restaurantId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = photorestaurant.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(photorestaurant.id)
    expect(view.deleteHash).toBe(photorestaurant.deleteHash)
    expect(view.imgurLink).toBe(photorestaurant.imgurLink)
    expect(view.restaurantId).toBe(photorestaurant.restaurantId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
