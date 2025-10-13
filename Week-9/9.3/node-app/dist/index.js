"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right";
})(Direction || (Direction = {}));
function doSomething(keyPress) {
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
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
//# sourceMappingURL=index.js.map