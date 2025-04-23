"use strict";
// Functions => We can assign the return value, and the parameters
const sayHello = (name, age, isLoggedIn) => {
    return 'Hello ' + name;
};
// Avoid using 'any' type at all times
console.log(sayHello("Bryan"));
const returningPromise = () => {
    return new Promise((resolve) => {
        resolve('hello');
    });
};
