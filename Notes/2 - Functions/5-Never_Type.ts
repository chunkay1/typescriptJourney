// Never is unique to TypeScript and doesn’t exist in JavaScript. It’s not commonly used, but it’s important to know what it is, and how it works. 

// The never type represents values that NEVER occur. We might use it to annotate a function that always throws an exception, or a function that never finishes executing. 

// Don’t confuse it with void. void returns undefined or null, which is technically still a type of value. With never, a function doesn’t even finish executing. 

//A function that doesn't finish running
const neverStop = (): never => {
  while (true) {
    console.log("I'm still going!");
  }
};

//A function that throws an exception
const giveError = (msg: string) => {
  throw new Error(msg);
};