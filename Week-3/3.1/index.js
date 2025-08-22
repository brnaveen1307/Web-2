const express = require('express');

const app = express();

app.get("/health-checkup", function(req, res){
    const username = req.headers.username;
    const password = req.headers.passsword;
    const kidneyId = req.query.kidneyId;

    if(username != "naveen" || password != "navimsd"){
       res.status(400).json({"message": "Invalid username or password!"});
       return
    }

    if(kidneyId != 1 && kidneyId != 2){
       res.status(400).json({"message": "Invalid input!"});
       return
    }

    res.json({
        "message": "Your kidney is healthy!"
    });

});

app.listen(3000);