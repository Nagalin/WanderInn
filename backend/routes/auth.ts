/**
* @swagger
* /login:
*   post:
*     summary: Authenticate user credentials
*     description: Authenticate user credentials and create access token, refresh token with valid credentials
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
*     responses:
*       200:
*         description: Authentication successful. Access and refresh tokens are sent via cookies.
*         headers:
*           Set-Cookie:
*             description: Set the access and refresh tokens as cookies.
*             schema:
*               type: array
*               items:
*                 type: string
*             examples:
*               access_token:
*                 value: "access_token=my_access_token; Path=/; HttpOnly"
*               refresh_token:
*                 value: "refresh_token=my_refresh_token; Path=/; HttpOnly"
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                     accessToken:
*                       type: string
*                       description: access token for user
*                       example: my_access_token
*                     refreshToken:
*                       type: string
*                       description: access token for user
*                       example: my_refresh_token
*                          
*                     
*       401:
*         description: Invalid user credentials.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                     data:
*                       type: string
*                       example: Invalid username or password
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


import express from 'express'
import { login, register } from '../controllers/authController'
const router = express.Router()

router.post('/login',login)
router.post('/register',register)

export default router