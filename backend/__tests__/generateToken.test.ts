import mongoose from "mongoose";
import generateToken from "../utils/generateToken"; // Update the path accordingly
import jwt from 'jsonwebtoken'

describe('Unit test generateToken function', () => {
  const userId = new mongoose.Types.ObjectId();
  const validAccessTokenKey = 'validAccessTokenKey';
  const validRefreshTokenKey = 'validRefreshTokenKey';

  beforeEach(() => {
    process.env.ACCESS_TOKEN_KEY = validAccessTokenKey;
    process.env.REFRESH_TOKEN_KEY = validRefreshTokenKey;
  });

  afterEach(() => {
    delete process.env.ACCESS_TOKEN_KEY;
    delete process.env.REFRESH_TOKEN_KEY;
  });

  it('should generate an access token properly', () => {
    console.log(validAccessTokenKey)
    const accessToken = generateToken(userId, 'ACCESS');
    const decodedToken: any = jwt.verify(accessToken, validAccessTokenKey);

    expect(decodedToken.id).toEqual(userId.toString());
  });

  it('should generate a refresh token properly', () => {
    const refreshToken = generateToken(userId, 'REFRESH');
    const decodedToken: any = jwt.verify(refreshToken, validRefreshTokenKey);

    expect(decodedToken.id).toEqual(userId.toString());
  });

  it('should throw an error if keys are not provided', () => {
    delete process.env.ACCESS_TOKEN_KEY;
    delete process.env.REFRESH_TOKEN_KEY;

    expect(() => generateToken(userId, 'ACCESS'))
    .toThrow('Access token key and refresh token are required in env file');
  });
});
