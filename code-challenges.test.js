// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// TEST
describe("hitchikerGuideStatement", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(hitchikerGuideStatement(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// RED
// FAIL  ./code-challenges.test.js
// hitchikerGuideStatement
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// ● hitchikerGuideStatement › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ReferenceError: hitchikerGuideStatement is not defined

//     22 | describe("hitchikerGuideStatement", () => {
//     23 |   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
//   > 24 |     expect(hitchikerGuideStatement(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//        |     ^
//     25 |   })
//     26 | })
//     27 |

//     at Object.expect (code-challenges.test.js:24:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.149 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.


// PSEUDOCODE
// INPUT: Array containing an object with string datatype
// OUTPUT: Array with string datatype.
// COMMENTS: After attempting several highfalutin functions, and arriving at only the first letter of the full name being capitalized, I re-read the problem and realized I was missing something in my understanding of the problem and subsequent approach to solving it. By re-naming my function something appropriate to the expected output, which is an array containing a string statement, my perspective to solving it changed. I was initially viewing my function


// b) Create the function that makes the test pass.

const hitchikerGuideStatement = (arr) => {
  // iterate through the array
  return arr.map((value) => {
    // split the full name and iterate through the split names
    const fullName = value.name.split(" ").map(splitName =>
      // capitalize zeroeth index elements and concatenate remaining elements starting at index 1
      splitName[0].toUpperCase() + splitName.substring(1)).join(" ")
      return `${fullName} is ${value.occupation}.`
  })
}

// GREEN
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-TorinJacobs/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   hitchikerGuideStatement
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.144 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.90s.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// TEST
describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3", () => {
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// RED 
// FAIL  ./code-challenges.test.js
// hitchikerGuideStatement
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// remainders
//   ✕ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3

// ● remainders › takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3

//   ReferenceError: remainders is not defined

//     101 | describe("remainders", () => {
//     102 |   it("takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3", () => {
//   > 103 |     expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//         |     ^
//     104 |     expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
//     105 |   })
//     106 | })

//     at Object.expect (code-challenges.test.js:103:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.159 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.


// b) Create the function that makes the test pass.

// INPUT: Array with mixed data types
// OUTPUT: Array with remainders of the numbers divided by 3 from the original array 

const remainders = (arr) => {
  // Iterate via filter and select numbers via typeof
  const getNumbers = arr.filter(nums => typeof nums === "number")
    // Iterate through numbers via map to get remainders
    return getNumbers.map(nums => nums % 3)
}

// GREEN
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-TorinJacobs/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   hitchikerGuideStatement
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
//   remainders
//     ✓ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.148 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.94s.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfCubedNums", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumOfCubedNums(cubeAndSum1)).toEqual(99)
    expect(sumOfCubedNums(cubeAndSum2)).toEqual(1125)
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// RED 
// FAIL  ./code-challenges.test.js
// hitchikerGuideStatement
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
// remainders
//   ✓ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3
// sumOfCubedNums
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed

// ● sumOfCubedNums › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: sumOfCubedNums is not defined

//     176 | describe("sumOfCubedNums", () => {
//     177 |   it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
//   > 178 |     expect(sumOfCubedNums(cubeAndSum1)).toEqual(99)
//         |     ^
//     179 |     expect(sumOfCubedNums(cubeAndSum2)).toEqual(1125)
//     180 |   })
//     181 | })

//     at Object.expect (code-challenges.test.js:178:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.166 s, estimated 1 s
// Ran all test suites.

// b) Create the function that makes the test pass.

// INPUT: Array of numbers
// OUTPUT: The sum of the numbers cubed

const sumOfCubedNums = (arr) => {
  // Setting a starting value to add the cubed numbers
  let sum = 0
  // Iterating through the array
  for (let val of arr){
    // adding each cubed value together
    sum += (val**3) 
  }
  return sum
}

// GREEN
// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-TorinJacobs/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   hitchikerGuideStatement
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
//   remainders
//     ✓ takes in a mixed data array and returns an array of only the remainders of the numbers when divided by 3
//   sumOfCubedNums
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.151 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.01s.