// Objects in TypeScript can be typed by declaring what the object should look like in the annotation. In other words, we can create annotations that ‘describe the shape’ of an object. 
// I.E. Notating what data types we should expect for specific key/value pairs. 

// Accessing a property that isn’t defined or performing operations without keeping types in mind will throw errors!

// There are different situations where we’d annotate the structure of an object - we could do it to store something in a variable, to specify what a return object looks like, or a very common use would be writing the annotation for a function parameter - what type of object does a function expect? 

// Example below -


//A function with an object type parameter
const printName = (name: { first: string; last: string }) => {
  return `Name ${name.first} ${name.last}`;
};

printName({ first: 'Fabian', last: 'Hernandez' });
//Name: Fabian Hernandez


// If we annotate the structure of an object within the function parameters, then later attempt to feed an object that is structured differently than what is expected, TypeScript will do it’s thing and yell at us about an unassignable data type. 


const printName1 = (name: { first: string; last: string }) => {
  return `Name ${name.first} ${name.last}`;
};

printName({ first: 14, last: 'Hernandez' });
//TS Error!  ^^type number is not assignable to type 'string'