const higherOrderFunction = (callback) => {
    return callback;
}

const addTwo = (num) => {
    return num + 2;
}

console.log(higherOrderFunction((addTwo(10))))