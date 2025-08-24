function getLength(name){
    return name.length
}

try{
    const ans = getLength()
    console.log(ans)
}catch(e){
    console.log("There was an error")
}

console.log("After the try-catch block")