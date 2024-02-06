const extractTokenFromHeader = (
    cookiesHeader: string,
    tokenType: 'accessToken' | 'refreshToken') => {

    let token = ''
    const cookie = cookiesHeader.split("; ")
    cookie.map(currCookie => {
        const [key, value] = currCookie.split('=')
        if (key === tokenType) token = value
    })
    return token
}

export default extractTokenFromHeader