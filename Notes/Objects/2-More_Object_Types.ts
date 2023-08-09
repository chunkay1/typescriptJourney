// **Variable Object Types:**

// While uncommon, it is possible to designate object variable shapes/types. 
// Let’s say we have a coordinate variable which we expect to follow the pattern/shape below 

//{x: number, y: number}

// We can specify this manually much like we could for a string or number. 


let coordinate: { x: number, y: number } = {};
//we are telling TS coordinate is yet to be provided, however, once it is, it
//should follow the structure above. 
coordinate = { x: 45, y: 20 }
//this would be valid 

let coordinate1: { x: number, y: number } = { x: '45', y: 20 }
//TS would yell at us regarding x since it's expecting a number, not a string

// ****************************************Return Object Types:****************************************

// We can also annotate the return type of an function to expect an object. 

// Let’s say we have a function called randomCoordinate. However first, let’s do a quick recap of TypeScript function annotation so far. 


function exampleOne(arg1: string): string {
  //arg1 is the parameter where we can designate argument types.
  //immediately after the parameter () we have the expected return type

  //inside main the brackets of the function, we have the function body.
  return 'arg1'
  //since we've annotated a return type, what we're returning must match
  //what we've annotated

};

function randomCoordinate(): { x: number, y: number } {
  return { x: Math.random(), y: Math.random() };
};

//because the x and y values are set to return numbers, Typescript will
//be OK with this function.
