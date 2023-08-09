// Basically a way of reusing a type and giving it a name. Often we’ll do this with more complicated types, like an object type, that has multiple properties.

// Think of it as creating a Type Annotation as a variable. 

// The formal definition from the slides is below. 

// Instead of writing out object types in an annotation, we can declare them separately in a ******************type alias******************, which is simply the desired shape of the object. 

// This allows us to make our code more readable and even reuse the types elsewhere in our code. 

// In the example below we can see the **********coordinate********** structure/type ( {**********************x: number, y: number} )********************** declared in multiple locations. 

let coordinate: { x: number, y: number } = { x: 45, y: 20 }

function randomCoordinate(): { x: number, y: number } {
  return { x: Math.random(), y: Math.random() };
};

function doublePoint(point: { x: number, y: number }): {
  x: number,
  y: number
} {
  return { x: point.x * 2, y: point.y * 2 };
};

// While ***********technically*********** correct, and OK by TypeScript, readability-wise, it does seem to be a bit lengthy and crowded. Instead of repeating this type everywhere, we can just create a type alias. 

// We use the ‘type’ keyword, the name (standard naming convention is to capitalize type names) and set it equal to the type.  

type ExamplePoint = {
  x: number;
  y: number;
};

// We can now reuse this type (renamed to Point) to replace every instance of the annotated type from the first example. 

// Notice that we’re not really doing anything new in this example. We’re just making a name for this type, not creating a new one from scratch - it’s just a reference to this type. 

type Point = {
  x: number;
  y: number;
};

let coordinate1: Point = { x: 45, y: 20 };

function randomCoordinate1(): Point {
  return { x: Math.random(), y: Math.random() };
};

function doublePoint1(point: Point): Point {
  return {
    x: point.x * 2,
    y: point.y * 2
  }
}