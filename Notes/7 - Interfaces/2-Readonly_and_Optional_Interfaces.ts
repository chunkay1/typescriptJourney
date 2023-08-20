// We can create optional and readonly properties for interfaces much like we can for Type aliases. 

interface Person {
  first: string;
  last: string;
  nickname?: string;
};

const thomas: Person = { first: "Thomas", last: "Hardy", nickname: "Tom" }
//this is OK
const thomas1: Person = { first: "Thomas", last: "Hardy" }
//also OK
const thomas2: Person = { first: "Thomas" }
//Not OK
const thomas3: Person = { first: "Thomas", last: "Hardy", nickname: 45 }
//also not OK

// We can also use the readonly modifier. Maybe our Person interface has an id that should be read. 

interface Person1 {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
};

const thomas4: Person1 = {
  id: 1,
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom"
}

thomas4.first = "asasdfa"
//this is ok
thomas4.id = 1231223
//not OK