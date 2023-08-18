// As we saw, when we create an Enum and don’t specify any values, TypeScript will automatically assign them numerical values starting at 0 and increment by 1 (Kind of like array index values)

// However, we can change that if we’d like. 

enum valueExample {
  PENDING = 11,
  SHIPPED //= 12,
	DELIVERED //= 13,
	RETURNED //= 14,
}


// In the example above, ******************ValueExample.PENDING****************** has a value of 11, and each value within the enum increments by one

// While uncommon, we could also assign individual values to each enum value as shown below. This would only really happen if you have an enum set that references very specific numbers or values, which again can be fairly uncommon. 


enum valueExample1 {
  PENDING = 11,
  SHIPPED = 200,
  DELIVERED = 300,
  RETURNED = 0,
}

// We can also work with an enum of strings.

// Let’s say we didn’t want to work with numbers, they can be strings. 


enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

ArrowKeys.LEFT //left
