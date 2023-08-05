// While the power of TypeScript comes from us annotating types, this is not always needed. 
// TypeScript does a good job of inferring a data type based on how we set the original variable.

let x: number = 17
let x = 17
//^^ TS will automatically infer that x is a number in this case

x = '27'
//^^if we tried this in a TS file, the compiler would yell at us that type
//'string' is not assignable to type 'number'