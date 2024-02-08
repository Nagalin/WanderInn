const extractTokenFromHeader = (
    cookiesHeader: string,
    tokenType: 'access_token' | 'refresh_token') => {

    let token = ''
    const cookie = cookiesHeader.split("; ")
    cookie.map(currCookie => {
        const [key, value] = currCookie.split('=')
        if (key === tokenType) token = value
    })
    return token
}

export default extractTokenFromHeader