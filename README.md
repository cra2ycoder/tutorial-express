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
