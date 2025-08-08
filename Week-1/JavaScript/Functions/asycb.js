console.log("Hi there");

setTimeout(function(){
    console.log("Inside an async function")
}, 20000);

setTimeout(function(){
    console.log("Inside an async function")
}, 10000);

let a = 0;
for(let i = 0; i < 10; i++)
{
    a = a + 1;
}

console.log(a);