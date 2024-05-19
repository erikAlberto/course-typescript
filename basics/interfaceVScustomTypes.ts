interface Person {
    name: string;
    age: number;
};

interface Employee extends Person {
    charge: string;
}

const newEmployee: Employee = {
    name: '',
    age: 40,
    charge: '',
};

//Union types

type User = {
    id: string;
}

type Admin = User & { token: string };

type ServiceResponseToken = string | null | undefined | number;
type UserTypes = 'admin' | 'superuser' | 0;

//const myUser: UserTypes = 0;

interface Developer  {
    name: string;
    stack: string [];
}

interface Developer {
    phone: string;
}

/*const me: Developer = {
    //phone
};*/