// There is an alternate syntax to annotate array types. It looks a bit clunky compared to the type annotation that we’ve seen so far, but it’s possible that we’ll encounter this syntax moving forward. 

// It’s important to know and understand this syntax as it’s not limited to arrays. 

//string array
let nameArr: Array<string> = ['hello', 'world'];

//number array
let ageArr: Array<number> = [24, 32, 19, 29];

const bools: Array<boolean> = [];
//const bools: boolean[] = []
//These are both the same

// We’re not limited to only working with primitive types (numbers, string, booleans, etc.) in our arrays. We can also work with our own custom types as well.

type PointArr = {
  x: number,
  y: number
  z?: number
}

const coords: PointArr[] = [];
//const coords is an array of our custom Point type alias

coords.push({ x: 23, y: 50, z: 10 })
//^^This is OK

coords.push({ x: '23', y: '50', z: 10 })
//^^TS would yell since we're attempting to pass in strings instead of #'s

coords.push({ x: 25, z: 5 })
//^^TS would yell as it's missing y

