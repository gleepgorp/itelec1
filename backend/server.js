require('dotenv').config();

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.use(express.json())
const db = require('./models')

// routes
const postRouter = require('./routes/Posts')
app.use('/posts', postRouter)

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('connected to db & listening to port', process.env.PORT)
  })
})
  

process.env