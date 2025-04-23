let myString: string | number = 'Hello world';
myString = "Another string";
myString = 1000;
// myString = true;

// React State, you may want your starting state to be one type, and once set it will be another type
console.log(myString);

// Arrays

// Define two types, we also need to define the element types
const longFormArrayOfNumbers: Array<number | string> = [5,6,7, "string"];
const arrayOfNumbers: number[] = [5,6,7];

// arrayOfNumbers.push("String");
arrayOfNumbers.push(8);

