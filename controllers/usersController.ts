import asyncHandler from 'express-async-handler'
import usersStorage from '../storages/usersStorage'
import { body, validationResult } from 'express-validator'

const alphaErr = 'must only contain letters'
const lengthErr = 'must be between 1 and 10 characters'

const validateUser = [
  body('firstName')
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body('lastName')
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
]

const usersListGet = asyncHandler(async (req, res) => {
  const allUsers = usersStorage.getUsers()
  res.render('users', { users: allUsers })
})
const usersCreateGet = asyncHandler(async (req, res) => {
  res.render('createUser')
})
const usersCreatePost = asyncHandler(async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400).render('createUser', {
      errors: errors.array(),
    })
  } else {
    usersStorage.addUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    })
    res.redirect('/users')
  }
})

export default {
  validateUser,
  usersListGet,
  usersCreateGet,
  usersCreatePost,
}
