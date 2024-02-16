// multiple conditions you want to test 

const d = new Date(2, 15, 2024, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
} else { console.log('Good Night');

}

//  Nested If

if (hour < 12) {
    console.log('Good Morning');

    if (hour === 6) {
        console.log('Wake Up');
    }
} else if (hour < 18) {
    console.log('Good Afternoon');
} else { console.log('Good Night');

if ( hour >= 20) {
    console.log('ZZZZZ');
}

}

// Multiple conditions in a single if statement 

if (hour >= 7 && hour < 15) {
    console.log('It is work time');
} // && and


if (hour === 6 || hour === 20) {
    console.log('Brush your teeth');
} // || or 
