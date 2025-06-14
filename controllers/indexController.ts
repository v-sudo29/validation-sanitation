import asyncHandler from 'express-async-handler'

export const getHomePage = asyncHandler(async (req, res) => {
  res.render('index')
})
