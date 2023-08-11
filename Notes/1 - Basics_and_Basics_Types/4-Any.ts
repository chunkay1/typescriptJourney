// The ‘Any’ type is unique to TypeScript and does not exist in JavaScript. 
// It allows you to use ‘Any’ type, essentially making it an escape hatch since it circumvents type checking and essentially defeats the purpose of TypeScript. 

// We generally don’t want to use it unless we have no choice.

let thing: any = "hello";
thing = 1
thing = false;
thing()
thing.toUpperCase();
//the 'any' type will tell TypeScript all of the above is correct, however going
//line by line, we can see why this is a problem

let thing1 = 'hello';
//^^type inference

thing1 = 1;
thing1();
thing1.splice();
//TS would yell at me for each one of these since thing has already been inferred
//to be a string, not a number, or a function, and .splice would not be a valid
//method for a string