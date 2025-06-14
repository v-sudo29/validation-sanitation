import Route from 'express'
import usersController from '../controllers/usersController'

const usersRouter = Route()
// Users list
usersRouter.get('/', usersController.usersListGet)

// User create routes
usersRouter.get('/create', usersController.usersCreateGet)

usersRouter.post(
  '/create',
  usersController.validateUser,
  usersController.usersCreatePost
)

// User update routes
usersRouter.get('/:id/update', usersController.usersUpdateGet)

usersRouter.post(
  '/:id/update',
  usersController.validateUser,
  usersController.usersUpdatePost
)

export default usersRouter
