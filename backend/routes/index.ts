import express from 'express'
import authRoute from './auth'
import hotelRoute from './hotel'
import isAuthenticated from '../middlewares/isAuthenticated'
const router = express.Router()

router.use(authRoute)
router.use(hotelRoute)

router.use(isAuthenticated)
router.get('/profile',(req,res) => res.status(200).end())

export default router
