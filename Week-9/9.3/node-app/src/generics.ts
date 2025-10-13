
function identity<T>(arg: T): T {
    return arg
}

let output1 = identity<string>("myString")
let output2 = identity<number>(100)
let output3 = identity<boolean>(true)
let output4 = identity<object>({ name: "Naveen" })

output1.toUpperCase()




function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0]
}

let str: any =  getFirstElement<string>(["Naveen", "Msd", "Dhoni"])
str.toUpperCase()

let num = getFirstElement<number>([1,2,3,4])

let bol = getFirstElement<boolean>([true, false, true])