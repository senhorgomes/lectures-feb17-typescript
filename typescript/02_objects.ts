// Mention the keys, and the key value types

// interface
interface Pet {
    name: string;
    breed: string;
    age: number;
}

interface User {
    // This doesnt have to exist in the object, but if it does, it needs to be a number
    // Optional properties
    id?: number
    username: string;
    password: string;
    pet: Pet
}

// interface UserWithId extends User {
//     id: number;
// }

const myObj: User = {
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

const arrayOfUsers: User[] = [];

arrayOfUsers.push(myObj);
// arrayOfUsers.push(myObj2);