/**
 * @swagger
 * /admin/product:
 *   put:
 *     summary: Add a new product if it not already exists
 *     description: Endpoint to add a new product with image.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '201':
 *         description: Product added successfully
 *       '409':
 *         description: Product already exists in the store
 *       '500':
 *         description: Internal server error, please try again later
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