require('dotenv').config()
const express = require('express')
const path = require('path')
const compression = require('compression')
const apicache =  require('apicache')

const app = express()
app.use(compression())
const cache = apicache.middleware
const bundlePath = path.join(__dirname, '/dist')

app.use('/dist', express.static(bundlePath))

app.get('*', cache('5 minutes'), (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`)
})
