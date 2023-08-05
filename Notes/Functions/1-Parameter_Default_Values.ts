// In JavaScript, if we have some function parameter with a default value, we can assign that pretty easily as shown below. 
function example(num = 10) {
};
//this is saying that if we don't provide num, it defaults to 10. 

// What happens when we add the type annotation though?
// Do we add the type before the variable name, after the type annotation? How do we declare it?
// It goes after the type annotation as shown below. 

function greet(person: string = 'stranger') {
	return `Hi there, ${person}!`;
}

//if person is not provided, default to stranger. 

greet();
`Hi there, stranger!`
greet('Fabian');
`Hi there, Fabian!`
greet(18);
//typescript error!

