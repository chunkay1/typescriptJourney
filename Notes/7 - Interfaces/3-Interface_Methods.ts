// So far all of the interface properties we’ve covered so far have been primitive types - but we can also describe the shape of an object in terms of what methods it includes, what those methods accept and what types they return as well. 

// Let’s start simple using the Person interface. 

// Note that there’s two different syntax versions that we can use to notate the method

interface Person2 {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  //*****  ^^This is NOT an arrow function!! *****
  //We're saying sayHi (sayHi:) must be a method () and it returns a string (=> string)
  //sayHi(): string;
  //^^this is an alternate syntax to indicate an interface method. 

};

// Now that we’ve declared sayHi to be an Interface method, what do we do for any variables that follow this new interface?

// Can we just include *****sayHi***** and set it to a string?

const thomas5: Person2 = {
  id: 1,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  sayHi: 'asdfa'
}

// No!

// What we’ve said is that *****sayHi***** accepts zero arguments, and returns a string. So we have to write a method that follows this structure as shown below. 

// Anything that deviates outside of this structure will result in TS yelling at us - as shown in *****thomas3*****

const thomas6: Person2 = {
  id: 1,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  sayHi: () => {
    return "Hello"
  }
}

const thomas7: Person2 = {
  id: 1,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  sayHi: (name: string) => {
    //bc we didn't include the 'name' parameter in our interface structure - TS 
    //will yell at us 
    return "Hello"
  }
}