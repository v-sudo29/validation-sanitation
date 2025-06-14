import { body, validationResult } from 'express-validator'
import express from 'express'
import path from 'path'
import indexRouter from './routes/indexRouter'

const PORT = 9090
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)

app.listen(9090, () => console.log(`Server is running on port ${PORT}`))
