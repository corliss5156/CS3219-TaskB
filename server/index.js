const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./src/routes/api-routes')

require('dotenv').config();


const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3000

console.log(process.env)


app.use('/api', router)

app.listen(port, () => {
 
  console.log(`Example app listening on port ${port}`)
})

module.exports = {app}