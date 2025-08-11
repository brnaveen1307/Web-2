function promise(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve('Hello, World!');
        }, 3000);
        
    });   

    return p;
}

async function main() {
    let value = await promise();
    console.log(value);
    console.log("Hi there!")
}

main();