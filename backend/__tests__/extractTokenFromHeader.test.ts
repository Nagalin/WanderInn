import extractTokenFromHeader from "../utils/extractTokenFromHeader";

describe('Unit test extractTokenFomHeader function',() => {
    it('should extract access token from header',() => {
        const cookiesHeader = 'access_token=accessToken; refreshToken=refreshToken'
        const accessToken = extractTokenFromHeader(cookiesHeader,'access_token')
        expect(accessToken).toBe('accessToken')
    })

    it('shoud extract refresh token from header', () => {
        const cookiesHeader = 'access_token=accessToken; refresh_token=refreshToken'
        const refreshToken = extractTokenFromHeader(cookiesHeader,'refresh_token')
        expect(refreshToken).toBe('refreshToken')

    })
})