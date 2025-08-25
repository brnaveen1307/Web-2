const express = require('express')

const app = express()

let requestCount = 0;

let numberOfRequestsForUser = {}
setInterval(function(){
    numberOfRequestsForUser = {};
}, 1000)

app.use(function(req, res, next){
    const userId = req.headers["user-id"]
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[userId]++;

        if(numberOfRequestsForUser[userId] > 5){
            res.status(404).send("Not allowed for more than 5 rquests in 1 second")
        }else{
            next()
        }
    }else{
        numberOfRequestsForUser[userId] = 1;
        next()
    }
})

app.get("/user", function(req, res){
    res.status(200).json({
        name: "John"
    })
})

app.post("/user", function(req, res){
    res.status(200).json({
        msg: "You have successfully created user"
    })
})

app.get("/requestCount", function(req, res){
    res.status(200).json({
        requestCount
    })
})

app.listen(3000)