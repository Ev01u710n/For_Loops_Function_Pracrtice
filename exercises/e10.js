// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let clientWithLetter = [];
  for (let i = 0; i < array.length; i++) {
    let nameLower = array[i].name.toLowerCase();
    for (let j in nameLower) {
      if (nameLower[j] == letter) {
        clientWithLetter.push(array[i].name);
      }
    }
  }
  return clientWithLetter;
}
// what I believe is going on is candy is Capitalized, how am I supposed to get hat outcome?

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
