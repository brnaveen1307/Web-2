const express = require('express')

const app = express()

function isOldEnough(age){
    if(age >= 14){
        return true
    }else{
        return false
    }
}

app.get("/ride", function(req, res){
    if(isOldEnough(req.query.age)){
        res.json({
        msg: "You have successfully rode the ride"
        })
    }else{
        res.status(411).json({
        msg: "Sorry!, you are not allowed to have a ride"
        })
    }
    
})

app.listen(3000)