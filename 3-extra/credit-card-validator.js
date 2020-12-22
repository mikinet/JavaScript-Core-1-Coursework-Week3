// The following program validates a customers credit card. 
// Function takes as a parameter a card number string value
function validateCard(cardNumber) {
    // declare a boolean variable that tells if the card is valid
    // initialise the variable with 'false' value as a safety(?) measure
    let isValidCard = false;

     // check if cardNumber is a number and it ends with an even number
    if (typeof cardNumber === "number" && cardNumber % 2 === 0) {   // if card passes the tests

        // turn cardNumber into a string array for ease of manipulation
        cardNumber = cardNumber.toString().split("");
        // validate card for other criteria
        isValidCard = cardNumber.length === 16 // cardNumber must be 16 digits long 
            && cardNumber.some(digit => cardNumber[0] != digit) // cardNumber must have at least one different digit
            && cardNumber.add() > 16;   // cardNumber digits must add up greater than 16        
    }
    
    return isValidCard;
}

// Function to calculate the total value of array of numbers represented as string
Array.prototype.add = function (sum=0) {
    for (let i = 0; i < this.length; i++){
        sum += parseInt(this[i]);
    }
    return sum;
}

console.log(validateCard(2345367819046421));    // cardNumber last digit is odd
console.log(validateCard(23453678190464212));   // cardNumber digits more than 16
console.log(validateCard("2345367819046422"));  // cardNumber is not a number
console.log(validateCard(1111111111111120));    // cardNumber digits don't add up greater than 16
console.log(validateCard(2222222222222222));    // cardNumber digits are all the same
console.log(validateCard("23453678a9046420"));  // cardNumber is not a number
console.log(validateCard(2345367819046412));    // cardNumber is GOOD!