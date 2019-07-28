const express = require('express')
const path = require('path')
const server = express()
const PORT = 3000

server.get('/', (request, response) => {
  response.sendFile(path.resolve('views/index.html'))
})

server.get('/about', (request, response) => {
  response.sendFile(path.resolve('views/about.html'))
})

server.get('/contact', (request, response) => {
  response.sendFile(path.resolve('views/contact.html'))
})

// server.use('/views', express.static(__dirname + '/views'))

server.listen(PORT, () => {
  console.log(`Server is listening at the port ${PORT}`)
})
