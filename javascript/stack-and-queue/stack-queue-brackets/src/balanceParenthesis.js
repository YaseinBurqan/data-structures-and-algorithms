/* eslint-disable quotes */
"use static";

/* 
big O
time complexity = O(n)
space complexity = O(n)
 */

// const Stack = require("../../stack_queue/src/stack");
//   let parStack = new Stack();

// `Truthy` values are Boolean values that resolve to `true`, while `falsy` values are values that resolve to Boolean `false`.

// this function will take a string input and give me a boolean result (matching the brackets)

let validateBrackets = (parentheses) => {
  // define a hash map : the keys are the opening one '( [ {' and the value are the closing one ') ] }' .
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  // define a stack array to add the values inside it.
  const stack = [];
  // making the for loop to have the characters of the string.
  for (let elements of parentheses) {
    // check the characters if are they an opining brackets.
    if (hashMap[elements]) {
      // if the characters are opening brackets, then it will be a key in the hash map, and this condition should produce a truthy value (Boolean values that resolve to true).
      // check if the elements is an opening bracket and push it in the stack array.
      stack.push(hashMap[elements]);
    }

    // using else if to complete the if statement case.
    // check if the stack is not empty(mean if there is a closing brackets "the value of the key in the hash map"), then check if matching the brackets (closing brackets at the end if they are valid and closing the opening brackets).
    else if (stack.length > 0 && stack[stack.length - 1] === elements) {
      // elements is a closing bracket and top of stack matches
      // pop : remove the final element from an array and to return that element.
      stack.pop();
    } else {
      // elements is a closing bracket and top of the stack doesn't match
      return false;
    }
  }
  return stack.length === 0;
};

// console.log(validateBrackets("()") + "1");
// console.log(validateBrackets("()[]") + "2");
// console.log(validateBrackets("()[]{}") + "3");
// console.log(validateBrackets("(}") + "4");
// console.log(validateBrackets("(]") + "5");
// console.log(validateBrackets("[(]") + "6");
// console.log(validateBrackets("{})") + "7");
// console.log(validateBrackets("(())") + "8");
// console.log(validateBrackets("((") + "9");
// console.log(validateBrackets("[[") + "10");
// console.log(validateBrackets("{{") + "11");
// console.log(validateBrackets("{{") + "12");
// console.log(validateBrackets("{") + "13");
// console.log(validateBrackets("({)}") + "14");

module.exports = validateBrackets;
