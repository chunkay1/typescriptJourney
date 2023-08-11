//Part 1
//Create an empty array of numbers called "ages"
const agesEx: number[] = []

//Part 2
//Create an array variable called gameBoard that starts as an empty array.
//It should be typed to hold a 2 dimensional array of strings.  
const gameBoard: string[][] = []

//Part 3
//Create a Product type that contains a name and a price. 
//An example could be:
//{ name: "coffee mug", price: 3.50}
type Product = {
  name: string;
  price: number;
}

//Part 4
//Write a function called getTotal that accepts an array of Product types.
//It should return the sum of all the products' prices


function getTotal(products: Product[]): number {
  let sum = 0;
  for (const product of products) {
    const { price } = product;
    //sum += product.price would work as well
    sum += price;
  }

  return sum;
}