const {expect} = require('../chai')
const request = require('supertest')

const app = require('../../main/error')

describe('GET - /', async () => {

    it('returns 403', async () => {
        // make a GET request on the app for the url '/'
        const response = await request(app).get('/')

        // check the HTTP status code
        expect(response.statusCode).to.equal(403)
        // check the raw text returned
        expect(response.text).to.equal('not sure what happened')
    })

})