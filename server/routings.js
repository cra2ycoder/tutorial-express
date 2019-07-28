const express = require('express')
const server = express()
const PORT = 3000

/**
 * @see https://expressjs.com/en/guide/routing.html
 */

// path with `.`
server.get('/random.text', (request, response) => {
  response.send('random.text')
})

// we will get response for `acd` and `abcd`
server.get('/ab?cd', (request, response) => {
  response.send('ab?cd')
})

server.get('/books/:bookName/:bookId', (request, response) => {
  console.log(request.params)
  response.send(request.params)
})

server.listen(PORT, () => {
  console.log(`Server is listening at the port ${PORT}...`)
})
