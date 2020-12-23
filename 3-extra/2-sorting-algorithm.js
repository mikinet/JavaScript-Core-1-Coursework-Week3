/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

// Function to sort an array containing numbers representing people's ages
function sortAges(arr) {
  // test if arr is actually an array
  let isArray = Array.isArray(arr);
  if (isArray === true) { // if arr is actually an array
    let filteredArr = [];  // declare a variable to store only numeric values filtered from arr
    // filter numeric values from arr
    for (let i = 0; i < arr.length; i++){
      if (typeof arr[i] === "number") {
        filteredArr.push(arr[i]);
      }
    }
    // now arr is filtered, check if filteredArr is not empty
    let isNotEmpty = filteredArr.length > 0;
    if (isNotEmpty === true) {  // if filteredArr has elements in it

      /*****************  START SORTING ******************/
      // to sort the filteredArr is the correct order, compare a number with every other number
        // in the unordered section of filteredArr. 
      for (let i = 0; i < filteredArr.length; i++){ // do this for every number in the list, starting from the first one
        let largest = filteredArr[i]; // simplify expression. Assume largest number to be the current number under test
        // let pos = i+1;  // position (index) of the first number we start to compare largest with  
        // start comparing
        for (let j = i+1; j < filteredArr.length; j++){ // scan through the list  
          let otherNum = filteredArr[j];  // simplify expression
          if (largest > otherNum) { // if largest is greater than the number we are comparing it with            
            // swap 
            filteredArr[i] = otherNum;
            filteredArr[j] = largest;
            largest = otherNum;  // update largest number
          }
        }
      /******************* FINISH SORTING *****************/
      }
      return filteredArr; // send back the sorted version of arr to caller
    } else {  // if filteredArray is empty
      return; // exit program without doing anything
    }
  }
  
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "sortAges function works - case 1",
  arraysEqual(sortAges(agesCase1), [23, 45, 55, 66, 100])
);

test(
  "sortAges function works - case 2",
  arraysEqual(sortAges(agesCase2), [55, 60, 100])
);
