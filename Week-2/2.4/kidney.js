const express = require("express");
const app = express();

const users = [{
    name: "Naveen",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res){
    const naveenKidneys = users[0].kidneys;
    const numberOfKidneys = naveenKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < naveenKidneys.length; i++){
        if(naveenKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        message: "Kidney added successfully!"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        message: "All kidneys marked as healthy!"
    })  
})

app.delete("/", function(req, res){
if(!isThereAtleastOneUnhealthyKidney()){
        const newKidneys = {};
        for(let i = 0; i < users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidnweys;
        res.json({
            message: "Unhealthy kidneys deleted successfully!"
        })
}else{
        res.sendStatus(411).json({
            message: "At least one kidney must be unhealthy to delete!"
        });
    }
})

function isThereAtleastOneUnhealthyKidney(){
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);