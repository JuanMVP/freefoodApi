import { Photouser } from '.'

let photouser

beforeEach(async () => {
  photouser = await Photouser.create({ deleteHash: 'test', imgurLink: 'test', userId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = photouser.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(photouser.id)
    expect(view.deleteHash).toBe(photouser.deleteHash)
    expect(view.imgurLink).toBe(photouser.imgurLink)
    expect(view.userId).toBe(photouser.userId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = photouser.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(photouser.id)
    expect(view.deleteHash).toBe(photouser.deleteHash)
    expect(view.imgurLink).toBe(photouser.imgurLink)
    expect(view.userId).toBe(photouser.userId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
