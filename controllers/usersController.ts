import asyncHandler from 'express-async-handler'

const usersListGet = asyncHandler(async (req, res) => {
  const fakeUsers = [
    {
      id: 1,
      firstName: 'Allie',
      lastName: 'Pallie',
    },
    {
      id: 2,
      firstName: 'Baller',
      lastName: 'Faller',
    },
    {
      id: 3,
      firstName: 'Canny',
      lastName: 'Franny',
    },
  ]
  res.render('users', { users: fakeUsers })
})
const usersCreateGet = asyncHandler(async (req, res) => {})
const usersCreatePost = asyncHandler(async (req, res) => {})

export default {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
}
