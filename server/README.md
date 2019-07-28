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
