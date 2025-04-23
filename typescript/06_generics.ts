// And you dont know what the type will be

interface Container<type> {
  name: string;
  // contents: string | number | Array
  contents: type;
}

const numberContainer: Container<number> = {
  name: "Two",
  contents: 2
}
const booleanContainer: Container<boolean> = {
  name: "Two",
  contents: true
}