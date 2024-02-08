import server from '../index'
import request from 'supertest'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
describe('Unit test register controller', () => {
    const payload = {
        username: 'user',
        password: 'pass',
        role: 'member',
        email: 'email',
        fname: 'name',
        lname: 'lastname',
        phoneNum: '999'
    }

    afterEach(() => jest.clearAllMocks())

    it('should register new member properly', async () => {
        User.findOne = jest.fn().mockResolvedValue(null)
        User.create = jest.fn().mockResolvedValue(payload)

        const response = await request(server)
            .post('/register')
            .send(payload)

        expect(response.status).toBe(201)
        expect(response.text).toBe('Your account have been created')
    })

    it('should not register new member with the conflict username', async () => {
        User.findOne = jest.fn().mockResolvedValue({
            username: 'user',
        })

        const response = await request(server)
            .post('/register')
            .send(payload)

        expect(response.status).toBe(409)
        expect(response.text).toBe('Username is already in used')
    })

    it('should not register new member with the conflict email', async () => {
        User.findOne = jest.fn().mockResolvedValue({
            email: 'email'
        })

        const response = await request(server)
            .post('/register')
            .send(payload)

        expect(response.status).toBe(409)
        expect(response.text).toBe('Email is already in used')
    })

    it('should handle bad request properly', async () => {
        const response = await request(server)
            .post('/register')

        expect(response.status).toBe(400)
        expect(response.text).toBe('Missing username info')
    })

    it('should handle error properly', async () => {
        User.findOne = jest.fn().mockImplementationOnce(() => {
            throw new Error('MongoDB error')
        })

        const response = await request(server)
            .post('/register')
            .send(payload)

        expect(response.status).toBe(500)
        expect(response.text).toBe('Internal server error')
    })
})

describe('Unit test login controller', () => {
    const payload = { username: 'username', password: 'password' }
    afterEach(() => jest.clearAllMocks())

    it('should authenticate user credentials', async () => {
        User.findOne = jest.fn().mockResolvedValue({
            username: 'username',
            password: 'password',
            role: 'member'
        })
        bcrypt.compare = jest.fn().mockResolvedValue(true)

        const response = await request(server)
            .post('/login')
            .send(payload)

        expect(response.status).toBe(200)
        expect(response.headers['set-cookie']).toBeDefined()
    })

    it('should handle bad request properly', async () => {
        const response = await request(server)
            .post('/login')

        expect(response.status).toBe(400)
        expect(response.text).toBe('Username and password are required')
    })

    it('should handle invalid credentials properly', async () => {
        User.findOne = jest.fn().mockResolvedValue(null)
        bcrypt.compare = jest.fn().mockResolvedValue(true)

        const response = await request(server)
            .post('/login')
            .send(payload)

        expect(response.status).toBe(401)
        expect(response.text).toBe('Invalid username or password')
    })

    it('should handle internal error properly', async () => {
        User.findOne = jest.fn().mockImplementationOnce(() => {
            throw new Error('MongoDB error')
        })

        const response = await request(server)
            .post('/login')
            .send(payload)

        expect(response.status).toBe(500)
        expect(response.text).toBe('Internal server error')
    })
})

describe('Unit test getNewToken controller', () => {


    afterEach(() => {
        jest.clearAllMocks()
        server.close()
    })

    it('should handle missing cookies header', async () => {
        const response = await request(server).get('/access-token')

        expect(response.status).toBe(403)
    })

    it('should return an error if ACCESS_TOKEN_KEY or REFRESH_TOKEN_KEY is not set', async () => {
        // Mock process.env to simulate missing environment variables
        delete process.env.ACCESS_TOKEN_KEY;
        delete process.env.REFRESH_TOKEN_KEY;

        const response = await request(server).get('/access-token')
        expect(response.status).toBe(500)
        expect(response.text).toBe('Internal server error')
        process.env.ACCESS_TOKEN_KEY = 'validAccessTokenKey';
        process.env.REFRESH_TOKEN_KEY = 'validRefreshTokenKey';
    });

    it('should handle invalid refresh token properly', async () => {
        jwt.verify = jest.fn().mockImplementation((token, key, callback) => {
            callback(new Error('Invalid token'));
        });
        const response = await request(server).get('/access-token')
            .set('Cookie', 'refreshToken=yourRefreshTokenHere')

        expect(response.status).toBe(403)
        expect(response.text).toBe('Invalid refresh token')

    })

    it('should return a new token via cookie', async () => {

        jwt.verify = jest.fn().mockImplementation((token, key, callback) => {
            callback(null, '');
        });
        const response = await request(server).get('/access-token')
            .set('Cookie', 'refreshToken=yourRefreshTokenHere')

        expect(response.status).toBe(200)
        expect(response.headers['set-cookie']).toBeDefined()


    })


})