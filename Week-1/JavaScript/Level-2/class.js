class Animal{
    constructor(name, legCount){
        this.name = name
        this.legCount = legCount
    }

    describe(){
        console.log(this.name + " has " + this.legCount + " legs");
    }
}

let dog = new Animal("Dog", 4);
let cat = new Animal("Cat", 4);

dog.describe();
cat.describe();