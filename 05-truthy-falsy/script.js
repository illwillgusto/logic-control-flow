// note that any that isn't falsy will be truthy 
// also keep in mind anything you pass into a if statement it will coerced into a Boolean

const email = 'test@test.com';

if (email) {
    console.log('You passed in a email');
}

console.log(Boolean(email)); /* true, the reason for this is a string with anything in it 
is a truthy value */

/* Falsy Values:
- false 
- 0
- "" or '' (Empty String)
- null
- undefined 
- NaN */

const x = false; // anyone of the 6 values will result in 'This is falsy'

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

/* Truthy Values:
- Everything else that is not falsy 
- true 
- '0' (0 in a string)
- ' ' (space in a string)
- 'false' (false in string)
- [] (empty array)
- {} (empty object)
- function () {} (empty function) */

const y = ' ';

if (y) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

// Truthy and Falsy caveats 
const children = 0;

if (children !== undefined) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Checking for empty arrays
const post = ['Post 1', 'Post 2'];

if (post.length) {   // post.length is checking for an empty array 
    console.log('List Posts');
} else {
    console.log('No Post To List');
}

// Checking for empty objects 

const user = {
    
};

if (Object.keys(user).length > 0) { // Object.keys(user).length > 0 is how you check the length of the object
    console.log('List User');
} else {
    console.log('No User');
}

// Loose Equality (==)
console.log(false == 0); // true, because both of them are equal in being falsy values 
console.log('' == 0); // true 
console.log(null == undefined); // true 

// in the above case it's better to use the strict equality (===)
console.log(false === 0); // false 
console.log('' === 0); // false 
console.log(null === undefined); // false