import Router from 'express'
import { getHomePage } from '../controllers/indexController'

const indexRouter = Router()

indexRouter.get('/', getHomePage)

export default indexRouter
