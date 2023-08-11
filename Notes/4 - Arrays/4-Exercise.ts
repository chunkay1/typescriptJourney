type Product = {
  name: string;
  price: number
}


function getTotal(product: Product): number {
  let sum = 0;
  const { price } = product;
  for (const price of product) {
    sum += price;
  }

  return sum;
}