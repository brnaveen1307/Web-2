const fs = require("fs");

function ReadFile()
{
    console.log("Inside ReadFile");
    return new Promise(function(resolve){
        console.log("Inside Promise");
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("Before Resolve");
            resolve(data);
        });
    })
}

function onDone(data)
{
    console.log(data);
}

var a = ReadFile();
console.log(a);
a.then(onDone);
