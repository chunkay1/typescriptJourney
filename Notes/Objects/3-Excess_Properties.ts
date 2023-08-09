// What happens when you maybe have more key/value pairs or properties in an object than you explicitly annotated in your function parameter?

// Let’s use the printName function as an example. The first example below is correct and only passes in what is expected. 

const printName = (name: { first: string; last: string }) => {
  return `Name ${name.first} ${name.last}`;
};

printName({ first: 'Mick', last: 'Jagger' });

// Now, let’s pass in an extra parameter to the object literal. 

const printName1 = (name: { first: string; last: string }) => {
  return `Name ${name.first} ${name.last}`;
};

printName1({ first: 'Mick', last: 'Jagger', age: 420 });
//^^ added age

// What do we think will happen? Is this going to give us an error, or is this okay?
// We’re not using ***age*** in the function, but what does the parameter annotation really mean?

const printName2 = (name: { first: string; last: string })

// Is this saying the object must ********only******** have *****first***** & ***last*** and nothing else?

// Or, is it more along the lines of we should definitely have a *****first***** & ****last****, anything else is optional?

// The answer is…. **an error!**

// If we tried to pass in a property that isn’t explicitly annotated, TypeScript would tell us

// ’Object literal may only specify known properties, 
// and ‘age’ does not exist in type ‘{ first: string; last: string; }’

// Instead, if took all the properties, and placed them into a variable, TypeScript would not complain. 

const printName3 = (name: { first: string; last: string }) => {
  return `Name ${name.first} ${name.last}`;
};

printName3({ first: 'Mick', last: 'Jagger', age: 420 });
//^^TypeScript Error!
const singer = { first: 'Mick', last: 'Jagger', age: 420 };
printName3(singer);
//No errors here!

// When passing in a variable, TypeScript will only check to ensure the annotated methods it’s expecting are present in the variable, everything else is ignored. 
// However, when we explicitly define an inline object literal within a function, TypeScript will do an extra check to make sure there’s no extra fluff, or data being passed in.