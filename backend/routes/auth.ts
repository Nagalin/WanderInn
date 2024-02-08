/**
 * @swagger
 * /login:
 *   post:
 *     summary: create an access token and refresh token and send via cookies with valid credentials
 *     description: authenticate user's credentials and create new access token and refresh token
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: username
 *               password:
 *                 type: string
 *                 example: password
 *              
 *     responses:
 *       200:
 *         description: Valid user's credentials, create access token and refresh token and send via HTTP only cookie
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *               example: "access_token=accessToken; Path=/; HttpOnly; refresh_token=refreshToken; Path=/; HttpOnly"
 *               description: "HTTP-only cookie for access token"
 *          
 *                   
 *       401:
 *         description: Invalid username or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: Invalid username or password
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: Internal server error
 */




/**
 * @swagger
 * /register:
 *   post:
 *     summary: Save new user's information into database
 *     description: check if username or email is already in used, if not store all information into database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username.
 *                 example: user123
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: password123
 *               role:
 *                 type: string
 *                 description:  User's role (member or provider)
 *                 example: member
 *               email:
 *                 type: string
 *                 description:  User's email
 *                 example: myemail@gmail.com
 *               fname:
 *                 type: string
 *                 description:  User's firstname
 *                 example: John
 *               lanme:
 *                 type: string
 *                 description: User's lastname
 *                 example: Doe
 *               phoneNum:
 *                 type: string
 *                 description: User's ohone number
 *                 example: 0851234567
 *     responses:
 *       201:
 *         description: Successfully save user's information into database
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     data:
 *                       type: string
 *                       example: Your account have been created
 *                   
 *       409:
 *         description: username or email is already in used
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     data:
 *                       type: string
 *                       example: Your username is already in used
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   example: Internal server error
 */





/**
 * @swagger
 * /access-token:
 *    get:
 *      summary: Create a new access token for user with a valid refresh token
 *      description: Verify the refresh token. If it's valid, create a new access token and send it back via cookie.
 *      parameters:
 *        - in: cookie
 *          name: refresh_token
 *          description: The HTTP-only cookie containing the refresh token.
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: OK
 *        403:
 *          description: missing requried cookies header
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     data:
 *                       type: string
 *                       example: Cookie headers are missing
 */

/**
 * @swagger
 * /profile:
 *    get:
 *      summary: Create a new access token for user with a valid refresh token
 *      description: Verify the refresh token. If it's valid, create a new access token and send it back via cookie.
 *      parameters:
 *        - in: cookie
 *          name: access_token
 *          description: The HTTP-only cookie containing the access token.
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: username
 *                 role:
 *                   type: string
 *                   example: member 
 *        403:
 *          description: missing requried cookies header
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     data:
 *                       type: string
 *                       example: Cookie headers are missing
 */








import express from 'express'
import { login, getNewToken, register } from '../controllers/authController'
const router = express.Router()

router.post('/login',login)
router.post('/register',register)
router.get('/access-token',getNewToken)

export default router