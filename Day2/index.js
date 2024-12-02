const fs = require('fs');


let safe = 0;


function convertToArrays(inputString) {

    const lines = inputString.trim().split('\n');
    const arrays = lines.map(line => {
        return line.trim().split(/\s+/).map(num => parseInt(num));
    });

    return arrays;
}

function checkArraySafety(arr) {

    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i + 1] - arr[i];


        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }


        if (diff <= 0) isIncreasing = false;
        if (diff >= 0) isDecreasing = false;
    }


    return isIncreasing || isDecreasing;
}

try {

    const input = fs.readFileSync('input.txt', 'utf8');


    const arrays = convertToArrays(input);


    arrays.forEach((array, index) => {
        console.log(`Checking array${index + 1}:`, array);
        if (checkArraySafety(array)) {
            safe++;
            console.log(`Array ${index + 1} is safe`);
        } else {
            console.log(`Array ${index + 1} is not safe`);
        }
    });

    console.log(`Total safe arrays: ${safe}`);

} catch (err) {
    console.error('Error reading file:', err.message);
}