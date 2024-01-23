import express from 'express'
import userRoute from './user'
const router = express.Router()

router.get('/',(req,res)=>res.send('<h1>hello world</h1>').end())
router.use(userRoute)

export default router
