// In the real world our data can often come in the form of nested objects. To make working with these objects easier, it’s best to use a type alias. 

//A function with a nested object type parameter
const describePerson = (person: {
  name: string;
  age: number;
  parentNames: {
    mom: string;
    dad: string;
  }
}) => {
  return `Person: ${person.name}, 
	Age: ${person.age},
	Parents: ${person.parentNames.mom}, ${person.parentNames.dad}.`;
};

describePerson({ name: 'Jimmy', age: 10, parentNames: { mom: 'Kim', dad: 'Steve' } });
//Person : Jimmy, Age: 10, Parents: Kim, Steve.

// Let’s suppose we are Spotify, and want to write functions to calculate payouts/earnings

function calculatePayout(song: {
  title: string, artist: string,
  numStreams: number, credits: { producer: string, writer: string }
}) {

}

// {
// 	title: 'Cosmic',
// 	artist: 'Avenged Sevenfold',
// 	numStreams: 11455301,
// 	credits: {
// 		producer: "M. Shadows"
// 		writer: "Synyster Gates"
// 	}
// }

// As we’ve seen, we could set up our function this way, and ************technically************ TypeScript would be okay with it. However, it’s best if we set up a type alias. 

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout1(song: Song): number {
  //^^ this can be named anything we want
  return 0.0033 * song.numStreams
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
};

const mySong: Song = {
  title: 'Cosmic',
  artist: 'Avenged Sevenfold',
  numStreams: 11455301,
  credits: {
    producer: "M. Shadows",
    writer: "Synyster Gates"
  }
}

calculatePayout1(mySong);
printSong(mySong);

// As we’ve talked about before regarding type alias’ TypeScript will yell at you if any of the key/value pairs we listed in the alias are not present in function. 

// For example:

type Song1 = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function printSong1(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
};

const myNewSong: Song = {
  title: 'Cosmic',
  artist: 'Avenged Sevenfold',
  numStreams: 11455301,
  credits: 'asdfas'
}

printSong(mySong);
//TypeScript would yell at me since it's expecting a nested object for
//credits instead of a string. 