const express = require('express')
const router = require('./src/routes/api-routes')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000



app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})