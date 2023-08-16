// So far we’ve worked with variables and function parameters that are of a single type. 
// However in the real world that might not always be feasible. We might sometimes need to specify that a variable might be one of a set of different data types, or that a function might accept more than just one data type. 

// Union types allow us to give a value a few different possible types. If the eventual value’s type is included, Typescript will be happy. 

// We can create a union type by using the single | (called a **************pipe character**************) to separate the types we want to include. It’s like saying, “this thing is allowed to be this, this, or this” Typescript will enforce it from there. 

//a function with a union type parameter
const guessAge = (age: number | string) => {
  return `your age is: ${age}`
}

//CAN pass a number or a string
guessAge(30)
guessAge('30')

//CAN'T pass something else
guessAge({ age: 30 });

// We usually wouldn’t use it when we know the value of something at runtime. 

// For example, using the example above, if we know before runtime, that age is a number equal to 44, it’s not required, but we could do it if needed.