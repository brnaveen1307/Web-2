function asyncFun(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hey there")
        }, 3000)
    });

    return p;
}

async function main(){
    let value = await asyncFun()
    console.log("Hey there 1");
    console.log(value);
}

main();

console.log("After main");