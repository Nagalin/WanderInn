/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user credentials
 *     description: Authenticate and create access token, refresh token with valid credentials
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
 *                 value: "access_token=your_access_token; Path=/; HttpOnly"
 *               refresh_token:
 *                 value: "refresh_token=your_refresh_token; Path=/; HttpOnly"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     id:
 *                       type: string
 *                       description: The user ID.
 *                       example: abc1234
 *                     name:
 *                       type: string
 *                       description: user's role
 *                       example: member
 *       401:
 *         description: Invalid user credentials.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               properties:
 *                     data:
 *                       type: string
 *                       description: user's role
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


import express from 'express'
import { login, register } from '../controllers/authController'
const router = express.Router()

router.post('/login',login)
router.post('/register',register)

export default router
