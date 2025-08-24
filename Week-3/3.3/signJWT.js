const jwt = require('jsonwebtoken')

const value = {
    name: "naveen",
    accountHolder: 123123
}

const token = jwt.sign(value, 'secret')

console.log(token)