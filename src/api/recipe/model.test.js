import { Recipe } from '.'

let recipe

beforeEach(async () => {
  recipe = await Recipe.create({ name: 'test', description: 'test', ingredients: 'test', dinnerGuest: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = recipe.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(recipe.id)
    expect(view.name).toBe(recipe.name)
    expect(view.description).toBe(recipe.description)
    expect(view.ingredients).toBe(recipe.ingredients)
    expect(view.dinnerGuest).toBe(recipe.dinnerGuest)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = recipe.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(recipe.id)
    expect(view.name).toBe(recipe.name)
    expect(view.description).toBe(recipe.description)
    expect(view.ingredients).toBe(recipe.ingredients)
    expect(view.dinnerGuest).toBe(recipe.dinnerGuest)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
