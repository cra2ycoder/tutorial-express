## ROUTES

- Route paths can be `strings, string patterns, or regular expressions.`
- some path details refered from https://expressjs.com/en/guide/routing.html

| path         | works for                                   |
| ------------ | ------------------------------------------- |
| /random.text | .                                           |
| /ab?cd       | acd and abcd                                |
| /ab+cd       | abcd, abbcd, abbbcd, and so on              |
| /ab\*cd      | abcd, abxcd, abRANDOMcd, ab123cd, and so on |
| /ab(cd)?e    | /abe and /abcde                             |
| /a/          | will match anything with an “a” in it.      |
| /.\*fly\$/   | butterfly, dragonfly, so on.                |

---

## Route parameters

- we can use `:` in the path to work as url varaibles/path parameters
- see below example

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

## Rendering a View with HTML files

- using `response.sendFile` can render the view

```js
server.get('/', (request, response) => {
  response.sendFile(path.resolve('views/index.html'))
})
```
