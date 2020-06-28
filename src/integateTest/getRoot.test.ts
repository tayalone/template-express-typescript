import server from '../server'
import request from 'supertest'
describe('Integate Test', () => {
  describe('Get /', () => {
    let res: any = null
    beforeAll(async () => {
      res = await request(server).get('/')
    })

    it('res status must be 200', () => {
      expect(res.status).toEqual(200)
    })
    it(`body.message must be OK`, () => {
      expect(res.body.message).toEqual('OK')
    })
  })
})
