// While literal types are not ****************directly**************** linked to union types, they’re pretty much almost always used with a union type. 

// Literal types are not just types - but the values themselves too!

// On it’s own, that’s not super helpful. But combine it with something like unions and you can have very fine-tuned type options for Typescript to enforce. 

//A function with a literal+union type parameter

const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}.`;
}

//CAN provide one of the literals in the union
giveAnswer("no") //The answer is no.

//CAN'T provide anything else
giveAnswer("Oh boy, who knows?")
// Another example:


//instead of declaring mood to be a string like in the line below
// let mood: string = "Happy"

//we're declaring the variable mood to start as happy, but that it can also be one 
//of the literal types "Happy", "Sad", or "Mad"
let mood: "Happy" | "Sad" | "Mad" = "Happy";
mood = "Mad"
//^^this will be OK
mood = "Funny"
//^^Not OK


// Another way of explaining it would be that when combining a literal type, with a union type, a specified variable or parameter **must be** one of the provided, possible, literal values. 

// i.e. - in **********giveAnswer,********** the ******answer****** parameter must be one of the three literal types provided within the union type of “yes”, “no”, or “maybe”

// We can also use literal types with type alias’s

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday"
//because we've declared the variable today to be of type DayOfWeek,
//Typescript will not accept any input besides what's specified in 
//DayOfWeek, this is normal type alias behavior though. 

let today: DayOfWeek = "Mon"
//TS will yell at us 