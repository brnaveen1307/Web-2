const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = "123456"

const app = express()
app.use(express.json())

const ALL_USERS = [
    {
        username: "naveen@gmail.com",
        password: "123",
        name: "Naveen",
    },
    {
        username: "bharath@gmail.com",
        password: "1234",
        name: "Bharath"
    },
    {
        username: "tharun@gmail.com",
        password: "5678",
        name: "Tharun"
    }
]

function userExists(username, password){
    let userExists = false
    for(let i = 0; i < ALL_USERS.length; i++){
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
            userExists = true
        }
    }

    return
}

app.post("/signin", function(req, res){
    const username = req.body.username
    const password = req.body.password

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does't exist"
        })
    }

    var token = jwt.sign({username: username}, jwtPassword)
    return res.json({
        token,
    })
})

app.get("/users", function(req, res){
    const token = req.headers.authorization
    try{
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username
    }catch(err){
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(3000);