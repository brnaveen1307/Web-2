const express = require('express');

const app = express();

app.use(express.json());

app.post("/", function(req, res){
    const kidneys = req.body.kidneys;
    if(!kidneys){
        res.json({
            msg: "Inavlid input!"
        })
    }else{
        const kidneysLength = kidneys.length;
        res.send("You have " + kidneysLength + " kidneys");
    }
})

app.use(function(err, req, res, next){
    res.json({
        msg: "Something went wrong!"
    })
})

app.listen(3000);