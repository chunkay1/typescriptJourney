// For all of the examples we’ve seen so far, TypeScript would yell at us if any of the properties we’ve annotated as either an inline object literal, or a Type Alias, are missing. 
// But what if we wanted to make a property optional?
// It’s actually simple. 

// Using the Point alias as an example, we’ll add an optional property, ‘z’ which is annotated with a question mark next to the key property. 

type Point1 = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point1 = { x: 1, y: 3, z: 9 };
const myPoint1: Point1 = { x: 3, y: 4 }
//both constants would be valid in this case since z is optional.
//however, if we were to remove the optional annotation from z, and 
//tried this, TS would yell at us about the second constant missing
//the z parameter

