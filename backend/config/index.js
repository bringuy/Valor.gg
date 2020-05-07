const express = require('express')
const cors = require('cors')
require('../db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const userRouter = require('./../routes/user')
const matchRouter = require('../routes/match')

app.use('/user', userRouter)
app.use('/match',matchRouter)

app.listen(port, function() {
    console.log(`app is listening on port ${port}`)
})