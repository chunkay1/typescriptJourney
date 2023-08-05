// Using this straightforward JS snippet we can demonstrate how we would use TS to work with the numbers data type. 


function add(n1, n2) {
    return n1 + n2;
}

const number1 = 7;
const number2 = 5.5;

const result = add(number1, number2);

console.log(result);
// When compiling the code above we would expect the logged result to equal 12.5
// However, what happens if we change `number1` to a string?


function add(n3, n4) {
    return n3 + n4;
}

const number3 = '7';
const number4 = 5.5;

const result1 = add(number1, number2);

console.log(result);


// The result becomes ‘75.5’ because instead of getting us the result of a mathematical operation, it coerces `number4` to a string since that is the data type of `number3` and concatenates the two. 

// While you might be thinking, ‘why would I write this? This isn’t a mistake I would make’ - the reality is that sometimes we as the developer aren’t making the mistake, maybe this is getting fetched and introduced by some user input, thus unintentionally introducing an unforeseen bug into your code where you forgot to transform this. 

// While it’s not impossible to make such an error, but it can be very difficult to track them down. 

// This is where TypeScript shines - we can add ********************************Type Assignments******************************** to our parameters. We can tell TypeScript what data type we expect our parameters to be when they’re passed in. 

function add(n5: number, n6: number) {
    return n5 + n6;
}

const number5 = '7';
const number6 = 5.5;

const result2 = add(number5, number6);

// We’ve assigned `n5` and `n6` the number ******************Type Assignment****************** - if we were to try and compile this code, we would get a compiling error. 


app.ts: 10: 20 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

const result = add(number1, number2);

Found 1 error in app.ts: 10


// This is something to note about TypeScript, it only helps us during compilation. It doesn’t change JS to run differently at run time bc browsers don’t have built in support  for TypeScript. 

// It can only help us during developing when we compile our TypeScript into JavaScript by adding an extra ‘sanity’ check.