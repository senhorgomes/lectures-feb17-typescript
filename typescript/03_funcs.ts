// Functions => We can assign the return value, and the parameters

const sayHello = (name: string, age?: number, isLoggedIn?: boolean): string => {
    return 'Hello ' + name;
}

// Avoid using 'any' type at all times

console.log(sayHello("Bryan"));

const returningPromise = ():Promise<string> => {
    return new Promise((resolve) => {
        resolve('hello');
    })
}