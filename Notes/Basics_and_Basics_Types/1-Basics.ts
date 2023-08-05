// Basics & Basic Types

// First and Foremost - Where do we use and apply types in our TypeScript code?

// There are tons of different situations ranging from:

// **Functions:**

// - ‘This particular function needs to return a boolean’
// - ‘This function returns an array of booleans’
// - ‘This function returns a string’
// - ‘This function accepts two numbers as arguments and returns a number’

// **Objects - We can define detailed patterns or ‘shapes’ of objects:**

// - ‘This object must have a property called colors, set to an array of strings’

// **********************************Variables - Very basic, we’re defining variable types:**********************************

// - ‘This variable is a string’
// - ‘This variable is a number’

// **************************Variable Types -************************** Assigning a basic type to a variable is easy - just add **********:Type********** after the variable name. This is also called ‘Type Annotation’


const myAwesomeVariable: string = 'So Awesome!';
//^^ Type Annotation


// **********************Core Types Recognized by both JS and TS:**********************

// - Number - In both JS and TS there is only one integer type. There is no differentiation b/w integers or floats.
// - String - Text values contained within a set of ‘single quotes’, “double quotes”, or `back ticks` which can be used for template literals.
// - Boolean - true, false. Just these two, no “truthy” or “falsy” values

// While we can usually get away with Type Inference in our TypeScript code, the below is a common situation where we’ll want to use Type Annotation. 

// It’s when we declare a variable separately from initializing it. 


const movies = ["Arrival", "The Thing", "They Live", "Aliens"];
//what if I wanted to create a foundMovie variable and set it to a movie 
//from the movies array? What data type would I initially set it to in
//the beginning? An empty string (''), false, null?
let foundMovie;
//what some ppl do is not give it a value initially.
//But what does TS infer for the type?
//It's inferred as an any type

for (let movie of movies) {
	if (movie === "The Thing") {
		foundMovie = "The Thing";
		//even though we set it to a string in the line above, the original 
		//inferred type is any
	};
};
foundMovie();
foundMovie = 1;
foundMovie.splice();
//While the compiler will yell at us when we attempt to compile our code
//into JavaScript for the three lines above, TypeScript isn't going to 
//stop or notify us since foundMovie is an any type. 


// The whole point of TypeScript is for it to stop us and tap us on the shoulder when we’re making this sort of mistake. 

// What we can do is tell TypeScript what data type we eventually expect a variable to be, even if we don’t immediately assign it a value. 


const movies = ["Arrival", "The Thing", "They Live", "Aliens"];
let foundMovie: string;

for (let movie of movies) {
	if (movie === "The Thing") {
		foundMovie = "The Thing";
	};
};
foundMovie();
foundMovie = 1;
foundMovie.splice();
//Now if we were to place this into a TS file, it would yell at us
//for invalid methods or data types since it's expecting a string. 


// This is just one example where it’s important to declare type annotation in order to prevent an implicit ‘any’ type. There are other situations we’ll come across as we delve further into TS.

