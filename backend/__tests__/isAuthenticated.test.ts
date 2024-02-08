import { Request, Response, NextFunction } from "express";
import isAuthenticated from "../middlewares/isAuthenticated";
import extractTokenFromHeader from "../utils/extractTokenFromHeader";
import jwt from 'jsonwebtoken'

describe('Unit test isAuthenticated middleware', () => {
    afterEach(() => jest.clearAllMocks())

    it('should handle missing cookies header properly', () => {
        const req = {
            headers: { cookie: undefined }
        } as Request;
        const res = {
            status: jest.fn(() => res),
            send: jest.fn()
        } as unknown as Response;
        const next = jest.fn() as NextFunction;
    
        isAuthenticated(req, res, next);
    
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.send).toHaveBeenCalledWith('Cookies header are missing');
    });

    it('should handle invalid access token properly', () => {
        jwt.verify = jest.fn().mockImplementation((token, key, callback) => {
            callback(new Error('Invalid token'));
        });
        const req = {
            headers: { cookie: 'accessToken=invalidToken' }
        } as Request;
        const res = {
            status: jest.fn(() => res), //return res object so it can chain with subsuequence
            send: jest.fn()
        } as unknown as Response;
        const next = jest.fn() as NextFunction;

        isAuthenticated(req, res, next);

        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.send).toHaveBeenLastCalledWith('Invalid access token')
    });

    it('should call next function when access token is valid', () => {
        jwt.verify = jest.fn().mockImplementation((token, key, callback) => {
            callback(null, { id: 'userId' });
        });
        const validToken = 'validAccessToken';
        const req = {
            headers: { cookie: `accessToken=${validToken}` }
        } as Request & { id?: string };
        const res = {} as Response;
        const next = jest.fn() as NextFunction;

        // Mock jwt.verify to always call the callback with null error and a valid decoded object
        // jest.spyOn(jwt, 'verify').mockImplementation((token, key, callback) => {
        //     callback(null, { id: 'userId' });
        // });

        isAuthenticated(req, res, next);

        expect(req.id).toBe('userId');
        expect(next).toHaveBeenCalled();
    });

    it('should handle missing acess token key properly',() => {
        delete process.env.ACCESS_TOKEN_KEY
        const req = {
            headers: { cookie: undefined }
        } as Request;
        const res = {
            status: jest.fn(() => ({ send: jest.fn() }))
        } as unknown as Response;
        const next = jest.fn() as NextFunction;

        isAuthenticated(req, res, next);

        expect(res.status).toHaveBeenCalledWith(500);

    })
});
