// Tuples can also be used to store mixed types, however keep in mind that ********************the order does matter********************. 

// Let’s say we wanted an array to store HTTPS status codes and their responses.


type HTTPResponse = [number, string];

const successRes: HTTPResponse = [200, 'OK'];

//remember that ORDER MATTERS!
//If we tried to set successRes = ['OK', 200], TS would yell at us since  
//it expects a number first, followed by a string
//The same issue would occur if we attempted to add an additional element
//to the array or set it to anything other than what it's been declared as.


// ************************A QUIRK ABOUT TUPLES************************

// While TypeScript will yell at us if we try to declare a tuple to be anything other than what we’ve explicitly set it to, TypeScript will oddly be okay if we use array methods (push, pop, shift, etc.) on the tuple array after it has been created.