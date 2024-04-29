// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let namesWithA = [];
  let namesWithoutA = [];
  // loop through each name in the names array
  for (let i = 0; i < array.length; i++) {
    let hasA = false;
    // check if it contains the letter 'a' by iterating over its characters using another for loop
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "a") {
        hasA = true;
        break;
      }
    }
    if (hasA) {
      namesWithA.push(array[i]); // If the name contains 'a', we push it to namesWithA array
    } else {
      namesWithoutA.push(array[i]); //otherwise, we push it to namesWithoutA array
    }
  }

  return [namesWithA, namesWithoutA]; // return an array containing both arrays
}

// we . For each name, we . ; . Finally, .

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
