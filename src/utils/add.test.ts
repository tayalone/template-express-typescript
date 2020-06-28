import add from './add'

describe('Test utils/add.th', () => {
  describe('x = 1 and y =2', () => {
    it('result === 3', () => {
      const result: number = add(1, 2)
      expect(result).toEqual(3)
    })
  })
})
