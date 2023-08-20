// Another thing we can do with Interfaces is extend them or another way of putting it is that they can ‘inherit’ from another interface. 

// Building on the *Dog* interface - let’s suppose that we wanted to create a new Interface for **********ServiceDog**********- would we need to rebuild the original properties and expand on them?

// No!
// Instead of doing that, we can just add on the **********extends********** keyword after the new interface, followed by the interface we want to inherit from. 

interface ServiceDog extends Dog {
  job: "drug detection" | "bomb detection" | "seeing eye";
}
//now ServiceDog will automatically inherit name, age, breed, and bark()
//we can then just add in whatever we'd like and declare new variables accordingly

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 1,
  breed: "German Shepard",
  bark() {
    return "boork";
  },
  job: "drgu detection"
  //TS will yell at us about the typo
}

const chewy2: ServiceDog = {
  name: 'Chewy Dos',
  age: 5,
  breed: "German Shepard",
  bark() {
    return "boork";
  },
  job: "drug detection"
  //Okay
}