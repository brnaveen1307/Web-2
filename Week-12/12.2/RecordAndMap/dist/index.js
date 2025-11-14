"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = {
    "One": { age: 29, name: "Josh" },
    "Two": { age: 45, name: "Prajwal" }
};
const user = new Map();
user.set("One", { name: "Naveen", age: 20, email: 'naveen@gmail.com' });
user.set("Two", { name: 'Tharun', age: 23, email: 'tharun@gmaul.com' });
const log = user.get('One');
console.log(log);
//# sourceMappingURL=index.js.map