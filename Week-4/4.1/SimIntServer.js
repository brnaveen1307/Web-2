const express = require('express')

const app = express()

app.get("/interest", function(req, res){
    const p = parseInt(req.query.p)
    const r = parseInt(req.query.r)
    const t = parseInt(req.query.t)

    const interest = (p * r * t) / 100;
    const total = p + interest;

    res.send({
        total: total,
        interest: interest
    })
})

app.listen(3000, function(){
    console.log("The server is running in the port 3000....")
})