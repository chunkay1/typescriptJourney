// Another thing we can do with interfaces is reopen and add new properties after we’ve already described one. 

interface Reopen {
  name: string;
}

//we're not redefining Reopen in this case, we're simply adding on or 
//'reopening' the interface to add a new property. 
interface Reopen {
  age: number;
}

//Perfectly okay - Person has name & age
const personInt: Reopen = {
  name: 'Rodney',
  age: 42
}

// We wouldn’t usually do it like this ^^ where we go line by line and add onto it. 

// But we might have an interface located in another file, or even import one from a third party library. 
// However, we don’t want to redefine an interface entirely, merely just add onto it. 

// Let’s pretend the original interface ***Dog*** is hosted in another file. 

// just like the ******Reopen****** interface - we can tell TypeScript that we’re merely adding onto an it. 

//********** Hosted Elsewhere **********
interface Dog {
  name: string;
  age: number;
}
//********** Hosted Elsewhere **********

//Local file
interface Dog {
  //adding breed and bark
  breed: string;
  bark(): string;
}
//we didn't redefine Dog, we merely added onto it, now any variables or 
//constants using the 'Dog' structure will include all four properties. 

const oliver: Dog = {
  name: "Oliver",
  age: 6,
  breed: "Boxer/Pit Mix",
  bark(): {
		return "woof";
},
};

// Now let’s try the same thing with Types

type Person4 = {
  name: string;
}

//Error! TS complains about duplicate types
type Person4 = {
  age: number;
}

//Error! Age didn't get added to Person type
const person: Person4 = {
  name: 'Jerry',
  age: 42
}