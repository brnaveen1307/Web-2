const express = require('express')

const app = express()

let errorCount = 0;

app.get("/error", function(req, res){
    throw new Error("some error")
})

app.get("/user", function(req, res){
    res.json({
        name : "Naveen"
    })
})

app.get("/errorCount", function(req, res){
    res.status(200).json({
        errorCount
    })
})

app.use(function(err, req, res, next){
    res.status(404).send({})
    errorCount++;
})

app.listen(3000)