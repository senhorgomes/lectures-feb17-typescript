"use strict";
const newAuthor = {
    penName: "Bryan",
    numberOfBooks: 0,
    writeBook: function (title) {
        return title;
    }
};
console.log(newAuthor.writeBook("Coding with Typescript!"));
