"use strict";
// Mention the keys, and the key value types
// interface UserWithId extends User {
//     id: number;
// }
const myObj = {
    username: "senhorgomes",
    password: "password",
    pet: {
        name: "Rex",
        breed: "husky",
        age: 2
    }
};
const myObj2 = {
    username: "senhorgomes",
    password: "password",
    // Doesnt have a pet
};
// An array of interfaces
const arrayOfUsers = [];
arrayOfUsers.push(myObj);
// arrayOfUsers.push(myObj2);
