let age: number = 20;

let fruits: string[] = ['manzana','banana'];


let response:number | null = 7;

response?.toString();

type test = string | undefined;

let responseProducts: test;
let responsePartners: test;

// Type assertion

let message: any = '';

//let messageUppercase = (message as string).toUpperCase();

let messageUppercase = <string>message;

messageUppercase.toUpperCase();

