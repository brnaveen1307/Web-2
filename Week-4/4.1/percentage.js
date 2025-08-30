const express = require('express')

const app = express()

app.get("/percentage", function(req, res){
    const s1 = parseInt(req.query.s1)
    const s2 = parseInt(req.query.s2)
    const s3 = parseInt(req.query.s3)

    const total = s1 + s2 + s3;
    const percentage = (total / 300) * 100;

    res.send({
        total: total,
        percentage: percentage
    })
})

app.listen(3000, function(){
    console.log("The server is running in the port 3000....")
})