//Write the Movie type alias to make the following two variables properly typed
//Make sure that "originalTitle" is optional and "title" is readonly

//solution below
type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  }
}
//constants dune and cats were provided, solution above

const dune: Movie = {
  title: 'Dune',
  originalTitle: 'Dune Part One',
  director: 'Denis Villeneuve',
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: 'Cats',
  director: 'Tom Hooper',
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};


//Write a function called getProfit that accepts a single Movie object
//It should return the movie's worldwide gross minus its budget

//For example...
//getProfit(cats) => -211166652

function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
}

//^^this is technically fine, but it's a bit long, the ideal solution is below. 

function getProfit1(movie: Movie): number {
  const { grossWorldwide, budget } = movie.boxOffice;
  return grossWorldwide - budget;
}

//a third option would be to destructure budget inline within the function parameters
//this technically works as well, but might be a bit confusing to discern what exactly is being destructured in the parameter 
function getProfit2({ boxOffice: { budget, grossWorldwide } }: Movie): number {
  return grossWorldwide - budget;
}