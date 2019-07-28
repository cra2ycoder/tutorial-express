/**
 * @note
 * importing express package
 */
const express = require('express')
const path = require('path')
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

/**
 * @note
 * requesting express server to handle routing for the following path
 * using `GET` method
 */

server.get('/', (request, response) => {
  console.log({ request, response })
  response.send('home page!')
})

server.get('/about', (request, response) => {
  response.send('about page!')
})

server.get('/contact', (request, response) => {
  response.send('contact page!')
})

/**
 * @note
 * requesting express server to handle routing for the following path
 * using `POST` method
 */
server.post('/sign-in', (request, response) => {
  response.send('sing-in page!')
})

server.post('/download', (request, response) => {
  response.send('download page!')
})

/**
 * @note
 * accessing to the all routing methods
 * GET, POST, PUT, DELETE etc.,
 */

server.all('/all', (request, response, next) => {
  response.send('working with all http methods!')
  next()
})

/**
 * @note
 * loading images from static folder when the url hits with `/assets` path
 * http://localhost:3000/assets/data.json
 * http://localhost:3000/assets/home.html
 * http://localhost:3000/assets/cra2ycoder-logo.png
 * http://localhost:3000/assets/cra2ycoder-logo.svg
 */
// server.use('/assets', express.static('static'))

server.use('/assets', express.static(path.join(__dirname, 'static')))

/**
 * @note
 * error handling
 */

server.use((error, request, response, next) => {
  console.error(error.stack)
  response.status(500).send('something went wrong!')
})

/**
 * @note
 * handling 404 errors
 * this function should be always bottom of the code
 */
server.use((request, response, next) => {
  response.status(404).send('sorry, page not found!')
})

/**
 * @note
 * requesting express server to start and listen our app
 */
server.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`)
})
