// Intersection types allows us to have multiple types and combine them using using an ampersand - &

type Circle = {
  radius: number;
}

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
}

// In the example above we were able to create a constant - happyFace using the intersection of Circle and Colorful. Had we omitted either the radius or color keys, TypeScript would yell at us about a missing property. 

// What about when we maybe want to add an additional property to existing intersection? Can we annotate that inline as an object literal?

// Yes, we can! See below - 

type Cat = {
  numLives: number
}

type Dog = {
  breed: string
}

type CatDog = Cat & Dog & {
  age: number;
};

//what we're saying is that CatDog is the type intersection of Cat AND Dog
//AND this extra age property. 

const christy: CatDog = {
  numLives: 7,
  breed: 'Husky',
  age: 5
}