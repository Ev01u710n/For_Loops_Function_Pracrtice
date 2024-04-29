// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  let newArr = [];
  let deposit = 2000;
  for (let i = 0; i < array.length; i++) {
    // to start the loop for the array
    if (array[i].deposits) {
      // checks for deposits
      let sum = 0; //variable to be used
      for (let j = 0; j < array[i].deposits.length; j++) {
        sum += array[i].deposits[j]; //this sums up all of the deposits in the array
      }
      if (sum < deposit) {
        newArr.push(array[i]); //this pushes the sum of the deposits to the newArr if this is true.
      }
    } else {
      newArr.push(array[i]); //this covers the object in the array that doesn't have deposits. Else did'nt need a condition.
    }
  }
  console.log(newArr); //this shows me the code outcome in the terminal
  return newArr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
