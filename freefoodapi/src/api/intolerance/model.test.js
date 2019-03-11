import { Intolerance } from '.'

let intolerance

beforeEach(async () => {
  intolerance = await Intolerance.create({ name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = intolerance.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(intolerance.id)
    expect(view.name).toBe(intolerance.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = intolerance.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(intolerance.id)
    expect(view.name).toBe(intolerance.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
