// format
//  if (value or expression)
if (true) {
    console.log('This is true');
}

// evaluating expressions with operators 

const x = 10;
const y = 5;

if (x>=y) {
    console.log(`${x} is greater than or equal to ${y}`); /* this returns 10 is greater than 5 because the 
    if statement declared x/10 is greater than y/5*/

}

if (x === y) {
    console.log(`${x} is equal to ${y}`); // this won't run because of the first statement 
} else {
    console.log(`${x} is NOT equal to ${y}`); // this will return 10 is NOT equal to 5
}

// if statements are block scope 

if (x !== y) {
    const z = 20;
    console.log((`${z} is 20`));
}

// shorthands that can be used 
if (x === y) 
    console.log(`${x} is equal to ${y}`); // this won't run because of the first statement 
else console.log('This is false');


