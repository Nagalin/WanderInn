import express from 'express'
import authRoute from './auth'
import hotelRoute from './hotel'
import isAuthenticated from '../middlewares/isAuthenticated'
import userRoute from './user'
const router = express.Router()

router.use(authRoute)
router.use(hotelRoute)

router.use(isAuthenticated)
router.use(userRoute)

export default router
