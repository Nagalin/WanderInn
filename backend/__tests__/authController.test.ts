import server from '../index'
import request from 'supertest'
import User from '../models/User'
import bcrypt from 'bcryptjs'

describe('Unit test register controller', () =>{
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
        User.findOne = jest.fn().mockImplementationOnce(() =>{ 
            throw new Error('MongoDB error')
        })

        const response = await request(server)
        .post('/register')
        .send(payload)

        expect(response.status).toBe(500)
        expect(response.text).toBe('Internal server error') 
    })
})

// describe('Unit test login controller', () => {
//     afterEach(() => jest.clearAllMocks())

//     it('should authenticate user credentials',async () => {
//         User.findOne = jest.fn().mockResolvedValue({
//             username: 'username',
//             password: 'password'
//         })
//         bcrypt.compare = jest.fn().mockResolvedValue(true)

//         const response = await request(server)
//         .post('/login')
//         .send({username: 'username', password: 'password'})

//         expect(response.status).toBe(200)
//     })
// })