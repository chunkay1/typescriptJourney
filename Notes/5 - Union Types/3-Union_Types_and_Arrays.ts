// We learned that we can declare an array of some type in TypeScript

const numsExample: number[] = [2, 1, 3, 4,]

// But this approach only allows us to store a single data type in this array. 

// What if we wanted to create an array which holds more than one type, but I didn’t want it to hold any specific type. 

// One approach would be: 

const stuff: any[] = [1, 2, true, 'yes', { value: false }, [true, true, false]]
//^^technically this works, but it's broad and we want to avoid the 
//'any' type whenever and wherever we can. 

// A better approach could be to wrap the union type in parenthesis before declaring it to be an array.

const stuff1: (number | string)[] = ['stuff', 55, "yes", "noo", 161032169]
//this is telling typescript the constant any is an array consisting of either
//numbers or strings.

// It’s ******************************very important to wrap the union type in parenthesis.** Otherwise, what we’re telling TS is that the array variable will either be a number, or an array of strings in this example. 

const stuff2: number | string[] = ["this is fine until I add a number", 50]

// Another common example would be declaring an array of the first data type, or an array of the subsequent data type. 

const stuff3: number[] | string[] = [1, 2, 3]
//this is ok
const stuff4: number[] | string[] = ['1', '2', '3']
//also ok
const stuff5: number[] | string[] = ['1', 2, '3']
//not OK, TS would yell at us