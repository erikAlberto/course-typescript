class Animal {
    name: "generic animal";
    private age = 10;
    protected identity = "lll";

    constructor() {}

    sayHi() {
        console.log("Grr..", this.age);
    }
}

class Dog1 extends Animal {
    type: "Pastor aleman";

    constructor() {
        super();
    }

    sayHi() {
        this.identity;
    }
}

const myAnimal:Animal = new Animal();
myAnimal.sayHi();

const myDog:Dog1 = new Dog1();
