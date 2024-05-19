const sayHi = (name) => {
    console.log(`Hi ${name}`);   
}

sayHi("Hello everybody!!!");

function sayGoodbye(name) {
    console.log(`Bye ${name}`);
    
}

sayGoodbye("Erik");

interface ResponseServiceCD {
    id: number,
    name: string, 
    charge: string,
    number: number
}

const response: ResponseServiceCD = {
    id: 1,
    name: "erik",
    charge: "developer",
    number: 4
}
function show({name, ...other}: ResponseServiceCD): number {
    console.log("the name is: ", name);
    console.log("otros datos: ", other);
    
    //savePerson(({ name, ...other }));
    return 1;
}

show(response);
