/**
 * @note
 * importing express package
 */
const express = require('express')

/**
 * @note
 * creating express object in the name `server` / `app`
 */
const server = express()

/**
 * @note
 * declaring server port
 * by using this port number, we will be listening to our server
 * so, http://localhost:3000
 */
const PORT = 3000

server.get('/', (request, response) => {
  console.log({ request, response })
  response.send('home page!')
})

server.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`)
})
