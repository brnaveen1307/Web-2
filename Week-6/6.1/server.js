const express = require("express");
const app = express();
const cors = require("cors")

app.get("/server", function(req, res){
    const todos = [{
        id: 1,
        title: "Python",
        description: "Learn online"
    }, {
        id: 2,
        title: "JavaScript",
        description: "Learn from scratch"
    }]

    res.json(todos)
})

app.listen(3000, function(){
    console.log("The server is running in the port 3000....")
})