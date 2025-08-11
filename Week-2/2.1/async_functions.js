function onDone(){
    console.log("Hey there!");
}

setTimeout(onDone, 1000);

console.log("After setTimeout");

for(let i = 0; i < 5; i++) {
    console.log("Loop iteration:", i);
}

const fs = require('fs');
fs.readFile('a.txt', 'utf8', function(err, data) {
    console.log(data);
})

console.log("File read initiated");