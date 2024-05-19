interface Person {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string;
}

let person: Person = {
    name: "Erik",
    code: "01",
    charge: 1,
    description: "hola",
    sayHello: () => {
        return 'holaaaa';
    }
};

person.code = 50;

let secondPerson: Person = {
    name: "",
    code: "",
    charge: 0,
    sayHello: () => 'holaaaa222'
};

secondPerson.description?.toUpperCase;