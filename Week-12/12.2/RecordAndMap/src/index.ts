// Record
type Users = Record<string, {age: number; name: string}>;

const users: Users = {
    "One": {age: 29, name: "Josh"},
    "Two": {age: 45, name: "Prajwal"}
}

// Map
type User = {
    name: string;
    age: number;
    email: string;
}

const userMap = new Map<string, User>()
userMap.set("One", {name: "Naveen", age: 20, email: 'naveen@gmail.com'})
userMap.set("Two", {name: 'Tharun', age: 23, email: 'tharun@gmaul.com'})

const log = userMap.get('One')
console.log(log)
