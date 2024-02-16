const d = new Date(2024, 2, 15, 13, 0, 0)
const month = d.getMonth();
const hour = d.getHours();

switch(month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
        default:
    case 4:
        console.log('We dont know what month it is!');
}

/* Switch are most commonly used with immediate values, when checking a range directly */

switch (true) {
    case hour < 12:
    console.log('Good Morning');
    break;
    case hour > 12:
        console.log('Good Afternoon');
}