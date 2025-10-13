
function greet(firstName: string){
    console.log("Hello " + firstName)
}

greet("Naveen")

function sum(a: number, b: number): number{
    return a + b
}

const value = sum(10, 20)
console.log(value)

function isLegalAge(age: number){
    if (age >= 18){
        return true
    }else{
        return false
    }
}

const Age = isLegalAge(20)
console.log(Age)

function runAfter1S(fn: () => void){
    setTimeout(fn, 5000)
}

runAfter1S(function(){
    console.log("Hey there!")
})

const wish = (firstName: string) => `Hello ${firstName}!` 
wish("Naveen")

interface User{
    firatsName: string,
    lastName: string,
    age: number,
    email?: string // optional property
}

function  Legal(user: User){
    if(user.age >= 18){
        return true 
    }else{
        return false
    }
}

const x = Legal({
    firatsName: "Naveen",
    lastName: "Msd",
    age: 20
})

console.log(x)