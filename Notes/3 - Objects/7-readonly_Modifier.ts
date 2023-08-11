// The *readonly* modifier is a keyword unique to TypeScript that we use to designate properties in objects, arrays, and classes as readonly. 

// This means that TypeScript will yell at us if we attempt to write to those properties. 

// Let’s use the example below to illustrate ********readonly********

type User = {
  readonly id: number;
  //^^readonly goes before the object key
  username: string;
};

const user: User = {
  id: 12345,
  username: 'first'
}

console.log(user.id);
//TypeScript is OK with the above, we're only accessing/reading the ID
//however, if we attempted the following, TS would yell that user.id is 
//readonly.
user.id = 14444