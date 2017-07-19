import request from 'supertest'
import test from 'ava'
import { server } from './../../lib/server'

test.cb('request to server', t => {
  request(server)
    .get('/')
    .expect('Content-Type', 'application/json')
    .expect(200)
    .end((err, res) => {
      t.true(err === null, 'There is no error')
      t.end()
    })
})
