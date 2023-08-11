// We can specify the type returned by a function. 
// Even though TypeScript can often infer this, I prefer the explicit annotations.
// Add the type annotation after the function parameter list as shown below. 


//Creating a function with a return type
const addNums = (x: number, y: number): number => {
	//^^return type goes here
	return x + y;
}

addNums(5, 5);
//--> 10

function greet(person: string = 'stranger'): string {
	return `Hi there, ${person}!`;
}

greet();
`Hi there, stranger!`
greet('Fabian');
`Hi there, Fabian!`

// We technically don’t have to do this though. Just like with variables, TypeScript can infer the return type based on the parameter types we declare. 
// Using the square function as an example, since variable num is a number, and we’re returning num * num, TS can infer the return type will be a number.
// The same applies for functions where we’ve declared a default parameter value. As long as the parameter type is declared, TypeScript can infer the return type. 

function square(num: number) {
	return num * num;
}


function greet1(person: string = 'stranger') {
	return `Hi there, ${person}!`;
}

//if person is not provided, default to stranger. 

greet1();
`Hi there, stranger!`
greet1('Fabian');
`Hi there, Fabian!`
greet1(18);
//typescript error!

// However, it’s good practice to include return type annotations for a number of reasons. 
// First, it makes it obvious to anyone reading your code what we should expect the function to return. 
// Using the square function as an example - if we forget to include the return keyword and didn’t explicitly declare the return type, TypeScript will infer the return type to be ‘void’. 

// We haven’t covered the ‘void’ keyword just yet, but just know it’s means nothing, it doesn’t return anything at all, and there’s no return value. 
// Because we didn’t declare a return type, TypeScript didn’t catch our mistake 

function square1(num: number) {
	num * num;
}

square1(5)
//return type: void

// However, if we did annotate a return value in this example, TypeScript would yell at us when attempting to call the function. 

function square2(num: number): number {
	num * num;
}

square2(5)
//TypeScript would yell at us
//'A function whose declare type is neither 'void' nor 'any' must return 
//a value'

// What about functions that could return different types based on some conditional statement? TypeScript can infer those return types (called a Union type, more on these later) based on the function. (The video doesn’t explicitly state this, but you should be able to declare these union types, just like a regular type declaration)
function rando(num: number) {
	if (Math.random() < 0.5) {
		return num.toString();
	};

	return num;
}

//the inferred return type would be the union type of string | number
//however, I believe we could explicity include it as well as shown below. 

function rando1(num: number): string | number {
	if (Math.random() < 0.5) {
		return num.toString();
	};

	return num;
}


