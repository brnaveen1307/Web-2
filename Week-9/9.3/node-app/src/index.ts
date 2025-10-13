
enum Direction {
    Up = "up",
    Down = "down", 
    Left = "left",
    Right = "right" 
}

function doSomething(keyPress: Direction) {

    if (keyPress === Direction.Up) {
        console.log("You pressed up!");
    }

    if (keyPress === Direction.Down) {
        console.log("You pressed down!");
    }

    if (keyPress === Direction.Left) {
        console.log("You pressed left!");
    }

    if (keyPress === Direction.Right) {
        console.log("You pressed right!");
    }
}

doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Left);
doSomething(Direction.Right);  

console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)