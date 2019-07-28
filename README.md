# tutorial-express

## installation

```s
npm install express --save
npm install @types/express --save-dev
```

or in the `package.json` file, add the following config and hit `yarn install`

```js
"dependencies": {
    "express": "4.17.1"
}
"dependencies": {
    "@types/express": "4.17.0"
}
```

---

## creating a server

- create a file named as `server.js` in your root directory
- add the following code

```js
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

/**
 * @note
 * requesting express server to handle routing for the following path `/`
 *
 */
server.get('/', (request, response) => {
  console.log({ request, response })
  response.send('home page!')
})

/**
 * @note
 * requesting express server to start and listen our app
 */
server.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`)
})
```

- run the file by using the following command

```s
node server.js
```

---

## Basic Routing

- used to respond the client request for the particular endpoint
- to be in simple, when the url gets changed in the browser while our server is listening that should be handled by our express server. this is called `routing`
- express routing basically done based on the `HTTP Request Methods` such as `GET,POST, DELETE, PATCH, PUT and so on.,`
- syntax for using express routings

```js
server.METHOD(PATH, HANDLER)
```

- `server`: instance of express
- `METHOD`: name of HTTP Request Methods such as `get, post and so on.,`
- `PATH`: URL Path, which we entering in the browser
- `HANDLER`: the callback which we received from the express when the path has been entered in the browser
  - this has two main params

```js
  function(request, response) {
  ...
  }
```

**Example for GET Method:**

```js
// listening: http://localhost:3000
server.get('/', (request, response) => {
  response.send('home page!')
})

// listening: http://localhost:3000/about
server.get('/about', (request, response) => {
  response.send('about page!')
})

// listening: http://localhost:3000/contact
server.get('/contact', (request, response) => {
  response.send('contact page!')
})
```

**!!!IMPORTANT: whenever we are chaning any code in the `server.js` we would require to restart/re-run the code then only our changed will be reflected.**

---

## Serving static files in Express

To serve/access the images, files from server end

- using relative path by default

```js
/**
 * @note
 * loading images from static folder when the url hits with `/assets` path
 * http://localhost:3000/assets/data.json
 * http://localhost:3000/assets/home.html
 * http://localhost:3000/assets/cra2ycoder-logo.png
 * http://localhost:3000/assets/cra2ycoder-logo.svg
 */
server.use('/assets', express.static('static'))
```

- using absolute path if we are running the app from different directory

```js
server.use('/assets', express.static(path.join(__dirname, 'static')))
```

---

## handling 404 errors

- this code should be bottom of the code
- or simply above the `server.listen` method

```js
server.use((request, response, next) => {
  response.status(404).send('sorry, page not found!')
})
```

---

## accessing to the all routing methods

- if we wanted to handle the routing on the all of the `HTTP Request Methods` then we have to use `app.all` middleware function

```js
server.all('/all', (request, response, next) => {
  response.send('working with all http methods!')
  next()
})
```
