const express = require('express')
const app = express()

app.get("/todos", function(req, res){
    const todos = {
        "todos": [
        {
            "id": 1,
            "title": "Todo 1",
            "description": "This is Todo 1",
            "completed": false
        }, {
            "id": 2,
            "title": "Todo 2",
            "description": "This is Todo 2",
            "completed": false
        }
        ]
    }

    res.send(todos)
})

app.listen(3000, function(){
    console.log("The server is running in the port 3000....")
});