// Let’s write a function that accepts some type parameter of a number or string.

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23)
printAge('23')
//both are OK

// The above is a simple/contrived example, but illustrates how these union types work when passed into a function parameter. 

// Let’s go through a more a common scenario - we come across a function that has some sort of union type as a parameter, or multiple parameters, and we do something within the function, like call a method, that only works with a string or call an operation that only works with a number.  TypeScript will complain about that.

// Let’s use the calculateTax function as an example. 

//maybe price and tax are returning from an API, so we have to account for price
//being a number or string.
function calculateTax(price: number | string, tax: number) {
  price.replace('$', "")
  return price * tax
}

//the above is invalid for two reasons -

//the .replace method would be valid in case price was a string, but that method
//doesn't exist for numbers.

//also, bc of the possibility that price might be a string, we can't multiply 
//a string by tax, which is definitely a number. 

// How do we workaround this issue?
// We take advantage of something called type narrowing. Basically, we’re going to add a type-of check. We’ll get more into type narrowing later, but we’ll start off with a simple example. 

// We’ll check to see that price is a string - do X, otherwise if price is a number, do y. 

function calculateTax1(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace('$', ""));
  }
  return price * tax
  //by the time we get to this line, price will ALWAYS be a number
}