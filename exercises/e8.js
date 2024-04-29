
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
   let balance = 2000.00;
  let balanceAccounts = [];
  for (let x = 0; x < array.length; x++) {
    if (array[x].balance > balance) {
      balance = array[x].balance;
      balanceAccounts = [];
      balanceAccounts.push(array[x]);
    }
  } 
  return balanceAccounts;  
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
