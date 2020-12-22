// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var times100;

function multiplyBy100(num) {
    return num * 100;
}
times100 = numbers.map(multiplyBy100);
console.log("Result using conventional method: ", times100);

times100 = numbers.map(function multiplyBy100(num) {
    return num * 100;
});
console.log("Result using anonymous function: ", times100);

times100 = numbers.map(function (num) {
    return num * 100;
});
console.log("Result using anonymous function (simplified): ", times100);

times100 = numbers.map(num => {
    return num * 100;
});
console.log("Result using arrow function: ", times100);

times100 = numbers.map(num => num * 100);
console.log("Result using arrow function (simplified): ",times100);