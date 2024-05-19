type Persona = {
    name: string;
    code: string | number;
    description?: string;
}

const newPerson:Persona = {
    code: 'H',
    name: "erik",
};

type ServiceResponse = string | null | number | undefined;

type UserCharge = 'admin' | 'normal' | 'superuser';
let response: ServiceResponse;

const myUserType: UserCharge  = "admin"