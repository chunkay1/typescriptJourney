// Interfaces are one of the most commonly used pieces of TypeScript. 

// ****************************Right up front**************************** - interfaces are very similar to type aliases to the point where it’s kind of weird. 

// Interfaces allow us to create reusable, modular types that describe the shape of objects ************************************and only objects.************************************ 

//an interface
interface Person0 {
  name: string;
  age: number;
};

//use the type alias in the annotation
const sayHappyBirthday = (person: Person0) => {
  return `Her ${person.name}, congrats on turning ${person.age}!`;
}

sayHappyBirthday({ name: 'Jerry', age: 42 });
