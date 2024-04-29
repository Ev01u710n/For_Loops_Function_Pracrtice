// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  let balance = 0;
  let balanceAccounts = [];
  for (let x = 0; x < array.length; x++) {
    if (array[x].balance > balance && array[x].balance < 20) {
      balance = array[x].balance;
      balanceAccounts = [];
      balanceAccounts.push(array[x]);
    } else if (!array[x].balance > 0) {
      balanceAccounts.slice(5);
    }
  } 
  return balanceAccounts;  
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function