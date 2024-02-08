import User from "../models/User"
import request from 'supertest'
import server from '../index'
import jwt from 'jsonwebtoken'

describe('Unit test userController', () => {
    afterEach(() => jest.clearAllMocks())

    it('should handle when user is not found properly', async () => {
        User.findOne = jest.fn().mockResolvedValue(null)
        jwt.verify = jest.fn().mockImplementation((token, key, callback) => {
            callback(null, '');
        });

        const response = await request(server).get('/profile')
        .set('Cookie', 'accessToken=yourRefreshTokenHere')

        expect(response.status).toBe(404)
        expect(response.text).toBe('No user found')
    })

    it('should handle internal error properly', async () => {
        User.findOne = jest.fn().mockImplementation(() => {throw new Error('MongoDB')})
        jwt.verify = jest.fn().mockImplementation((token, key, callback) => {
            callback(null, '');
        });

        const response = await request(server).get('/profile')
        .set('Cookie', 'accessToken=yourRefreshTokenHere')

        expect(response.status).toBe(500)
        expect(response.text).toBe('Internal server error')
    })

    it("should return user's info properly", async () => {
        User.findOne = jest.fn().mockResolvedValueOnce({
            username: 'user', role: 'member'
        })
        jwt.verify = jest.fn().mockImplementation((token, key, callback) => {
            callback(null, '');
        });

        const response = await request(server).get('/profile')
        .set('Cookie', 'accessToken=yourRefreshTokenHere')

        expect(response.status).toBe(200)
        expect(JSON.parse(response.text)).toEqual({
            username: 'user', 
            role: 'member'
        });
    })
})