require('dotenv').config()
const express = require('express')
const path = require('path')
const compression = require('compression')

const app = express()
app.use(compression())
const bundlePath = path.join(__dirname, '/dist')

app.use('/dist', express.static(bundlePath))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`)
})
