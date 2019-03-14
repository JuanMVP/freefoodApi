import { Photorecipe } from '.'

let photorecipe

beforeEach(async () => {
  photorecipe = await Photorecipe.create({ deleteHash: 'test', imgurLink: 'test', recipeId: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = photorecipe.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(photorecipe.id)
    expect(view.deleteHash).toBe(photorecipe.deleteHash)
    expect(view.imgurLink).toBe(photorecipe.imgurLink)
    expect(view.recipeId).toBe(photorecipe.recipeId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = photorecipe.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(photorecipe.id)
    expect(view.deleteHash).toBe(photorecipe.deleteHash)
    expect(view.imgurLink).toBe(photorecipe.imgurLink)
    expect(view.recipeId).toBe(photorecipe.recipeId)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
