const express = require('express');

const app = express();

function validateUser(req, res, next){
    const username = req.headers.username;
    const password = req.headers.passsword;

    if(username != "naveen" || password != "navimsd"){
       res.status(400).json({"message": "Invalid username or password!"});
    }else{
        next();
    }
}

function validateKidney(req, res, next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
       res.status(400).json({"message": "Invalid input!"});
    }else{
        next();
    }
}

app.get("/health-checkup", validateUser, validateKidney, function(req, res){
    res.json({
        msg: "Inavlid username or password!"
    })
})

app.get("/health-checkup", validateUser, validateKidney, function(req, res){
    res.json({
        msg: "Inavlid kidneyId!"
    })
})

app.get("/health-checkup", function(req, res){

    res.json({
        "message": "Your kidney is healthy!"
    });
});

app.listen(3000);