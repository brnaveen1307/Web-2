let d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Food");
    }, 1000)
});

function callback(){
    console.log(d);
}

console.log(d);
d.then(callback);