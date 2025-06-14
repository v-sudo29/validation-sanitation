import Route from 'express'
import userController from '../controllers/usersController'

const usersRouter = Route()

// User update routes
usersRouter.get('/', userController.usersListGet)
usersRouter.get('/create', userController.usersCreateGet)
usersRouter.post(
  '/create',
  userController.validateUser,
  userController.usersCreatePost
)

export default usersRouter
