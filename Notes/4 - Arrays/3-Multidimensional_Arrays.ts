// Another thing we do often with arrays, is create multidimensional (nested) arrays. 

// Let’s say we wanted to have a tic-tac-toe board represented by strings for each position. Each row has three positions, and a board has three rows. 

// How do we do that?

// If we try to declare a constant called *****board***** and type it as an array of strings, that would be incorrect since it’s a nested array of strings (an array of arrays of strings.


const board: string[] = [['X', 'X', 'O'], ['O', 'O', 'X'],
['X', 'O', 'X']]
//TS would yell at us, the syntax above would be correct for a single array
//of strings


// So what do we do? Simple, just add an extra pair of square brackets to our type annotation.

const board1: string[][] = [['X', 'X', 'O'], ['O', 'O', 'X'],
['X', 'O', 'X']]

//TS would be ok with this. Now, any additions that we make, should be
//an array of strings. Any additions beyond that would be invalid. 

board1.push(['O', 'X', 'O'])
//Correct
board1[0] = 33
//incorrect
