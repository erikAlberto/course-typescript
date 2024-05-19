import { PI, User, generateId } from "./utils.module";

const myNumber = 10 * PI;

const myUser: User = { id: generateId.toString(), name: "Erik" };
console.log({ 
    myNumber,
    myUser
});
