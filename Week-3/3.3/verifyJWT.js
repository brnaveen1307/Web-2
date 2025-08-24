const jwt = require('jsonwebtoken')

const value = {
    name: "naveen",
    accountHolder: 123123
}

const token = jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmF2ZWVuIiwiYWNjb3VudEhvbGRlciI6MTIzMTIzLCJpYXQiOjE3NTYwNTQwMzN9.am9oLUu5zOqc5q6yrvCwY2dguLqIFBitCUpj7pMkiMU"
)