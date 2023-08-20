// We can also specify in an interface method its’ parameters as well as the correlating types. 

interface ProductInt {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: ProductInt = {
  name: 'leather oxfords',
  price: 150,
  applyDiscount(discount: number) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4))
