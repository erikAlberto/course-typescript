interface PersonInterface {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string;
}

class PersonClass {

    sayHello() {
        console.log("grr");
    }
}

// const personOne: PersonInterface = {};

const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

interface PetInterface {
    sayHello: () => string;
}

class PetClass {
    sayHello() {
        return "hi!!";
    }
}

class Dog implements PetInterface {
    sayHello() {
        return "hi from Dog";
    }
}

class Cat extends PetClass {}