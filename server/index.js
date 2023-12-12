const express = require('express')
const path = require('path')
const router = require('./src/routes/api-routes')

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


const app = express()
const port = process.env.PORT || 3000




app.use('/api', router)

app.listen(port, () => {
 
  console.log(`Example app listening on port ${port}`)
})

module.exports = {app}