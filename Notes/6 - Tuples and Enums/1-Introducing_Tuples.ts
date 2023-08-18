// Tuples are a special type exclusive to TypeScript - they don’t exist in JS. 

// Tuples are arrays of fixed lengths and ordered with specific types - like super **rigid** arrays. 


//Creating a Tuple with its type definition
let myTuple: [number, string];

//CAN assign it values per its specs
myTuple = [10, 'Typescript is fun!'];

//CAN'T assign it values of a dif structure;
myTuple = ['Typescript is fun!', 10]


// Let’s say that we wanted to create a variable that accepts three numbers to represent an RGB color. 


let rgbTuple: [number, number, number] = [255, 10, 130];
//^^this is okay w/TS

rgbTuple = [255, 10, '130'];
//Not okay

rgbTuple = [255, 10, 130, 200];
//not okay either

