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

// Get list of users
const usersListGet = asyncHandler(async (req, res) => {
  const allUsers = usersStorage.getUsers()
  res.render('users', { users: allUsers })
})

// Get create user form page
const usersCreateGet = asyncHandler(async (req, res) => {
  res.render('createUser')
})

// Create a new user
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

// Get update user form page
const usersUpdateGet = asyncHandler(async (req, res) => {
  const userId = req.params.id
  const user = usersStorage.getUser(userId)
  console.log(user)
  res.render('updateUser', { user })
})

// Update an existing user
const usersUpdatePost = asyncHandler(async (req, res) => {
  const userId = req.params.id
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400).render('updateUser', {
      errors: errors.array(),
    })
  } else {
    usersStorage.updateUser(userId, {
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
  usersUpdateGet,
  usersUpdatePost,
}
