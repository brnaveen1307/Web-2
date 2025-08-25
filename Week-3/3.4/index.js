const express = require('express')

const app = express()

app.get("/ride", function(req, res){
    res.json({
        msg: "You have successfully rode the ride"
    })
})

app.listen(3000)