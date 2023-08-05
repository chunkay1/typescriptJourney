// When TypeScipt can infer how an unnamed function is going to be called, it can automatically infer its parameters’ types. 


const numbers = [1, 2, 3];

//contextual typeing on an arrow function
numbers.forEach(num => {
  return num.toUpperCase();//Error!
  //.toUpperCase() doesn't work for nums
});


// Normally when we write a function, if don’t specify its’ parameters type, it would default to any since we didn’t specify what it should be. 

// However in an anonymous function, TypeScript is smart in the sense that it looks at the context in which the function is being called and the parameters which are being passed in. 

// Using the example below, even though the *****color***** parameter inside of the ****.map**** function isn’t assigned a type, TypeScript infers that it’s a string based on the fact that the *******colors******* variable is an array of strings. 


const colors = ['red', 'orange', 'yellow'];
//^^ remember this is the same as const colors: string[] = ['red', 'orange', 'yellow'];
colors.map(color => {
  //^^ if we were to hover over color in a code editor, TS would tell us
  //color: string
  console.log(color.toFixed()); //Error!
  //.toFixed() doesn't work for strings

  return color.toUpperCase();
});


// However, if we wanted to, we could still declare the type inside of the anonymous function. 


const colors1 = ['red', 'orange', 'yellow'];

colors1.map((color: string) => {
  console.log(color.toFixed()); //Error!
  //.toFixed() doesn't work for strings
  return color.toUpperCase();
});

//The below would be a valid example along with a return type annotation

const colors2 = ['red', 'orange', 'yellow'];

colors2.map((color: string): string => {
  console.log(color.charAt(0));
  return color.toUpperCase();
}); 