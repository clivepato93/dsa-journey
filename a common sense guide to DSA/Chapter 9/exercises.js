import { Stack } from "./stacks.js";
/*
1. If you were writing software for a call center that places
callers on hold and then assigns them to 
“the next available representative,” would you
use a stack or a queue?
*/

// Queue so the person who's been waiting the longest can be answered to first

/*
2. If you pushed numbers onto a stack in the following order:
1, 2, 3, 4, 5, 6, and then popped two items, which number would
you be able to read from the stack?
*/

/* The item you would be able to read is 4 as the 
last two items would of been popped off the stack */

/* 3. If you inserted numbers into a queue in the following order:
 1, 2, 3, 4, 5, 6,and then dequeued two items, which number would
you be able to read from the queue?
*/

/* The item you would be able to read is 3 as the 
last two items would of been dequeued off the front of the queue */

/*4. Write a function that uses a stack to reverse a string. (For example, "abcde"
would become "edcba" .) You can work with our earlier implementation of
the Stack class. */

function reverse(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let finalStr = "";
  while (stack.read()) {
    finalStr = finalStr + stack.pop();
  }
  return finalStr;
}

console.log(reverse("abc"));
