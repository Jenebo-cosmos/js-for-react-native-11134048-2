// Function to process an array of numbers.
 // Squares even numbers and triples odd numbers.
 
 
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            // Square the even number
            return num * num;
        } else {
            // Triple the odd number
            return num * 3;
        }
    });
}
// Export the function to use in other files
module.exports = { processArray };

 // Function to format an array of strings based on a corresponding array of numbers.
 // Capitalizes strings if the corresponding number is even.
 // Converts strings to lowercase if the corresponding number is odd.
  
function formatArrayStrings(strArr, numArr) {
    if (strArr.length !== numArr.length) {
        throw new Error("The lengths of the two arrays must be the same.");
    }

    return strArr.map((str, index) => {
        const num = numArr[index];
        if (num % 2 === 0) {
            // Capitalize the entire string if the number is even
            return str.toUpperCase();
        } else {
            // Convert the string to lowercase if the number is odd
            return str.toLowerCase();
        }
    });
}
// The usage 
const numbers = [2, 3, 4, 7, 8];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);
// Export the functions to use in other files
module.exports = { processArray, formatArrayStrings };
