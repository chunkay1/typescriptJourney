// Typing arrays may not work the way we initially think they do. 

// Let’s say that we wanted to have an array of active users:

const activeUsers: [] = []
//the problem with this, is that while it's valid for now, TypeScript will yell
//at us the moment we do anything to this array. 

activeUsers.push('Steven')
//^^TS will be upset with this bc what we've done is told it that activeUsers
//is of type, EMPTY array. 

// Instead, arrays can be typed using a type annotation followed by empty array brackets, like *number[]* for an array of numbers. 

// Note: these arrays only allow data of that one type inside them. More on that later!

//Using Brackets:

const activeUsers1: string[] = [];

activeUsers1.push('Fabian');
//^TS would be Ok with this

activeUsers1.push(234);
//^TS would yell at us 

//string array
let names: string[] = ['hello', 'world'];

//number array
let ages: number[] = [24, 32, 19, 29];
ages[0] = 30;
//^^This is ok
ages[1] = '55';
//not ok


// Working with arrays is a situation where we’d definitely want to annotate a variable, especially if it’s starting as an empty array.