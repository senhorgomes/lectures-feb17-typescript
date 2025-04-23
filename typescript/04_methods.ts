interface Author {
    penName: string;
    numberOfBooks: number;
    writeBook: (title: string) => boolean;
}

const newAuthor: Author = {
    penName: "Bryan",
    numberOfBooks: 0,
    writeBook: function(title:string) {
        if(title){
            return true;
        }
        return false;
    }
}

console.log(newAuthor.writeBook("Coding with Typescript!"));

// Highorder functions
// Callback
// const higherOrderFunction = (callback) => {
//     return callback;
// }
// What type is the parameter, and what type is the return value
const higherOrderFunction = (callback: any) => {
// const higherOrderFunction = (callback: () => string | number) => {
    return callback;
}

// const addTwo = (num) => {
//     return num + 2;
// }
const addTwo = (num: number): number => {
    return num + 2;
}

higherOrderFunction(addTwo(20))