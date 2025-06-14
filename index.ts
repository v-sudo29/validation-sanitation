import { body, validationResult } from 'express-validator'
import express from 'express'
import path from 'path'
import indexRouter from './routes/indexRouter'
import usersRouter from './routes/usersRouter'

const PORT = 9090
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(9090, () => console.log(`Server is running on port ${PORT}`))
