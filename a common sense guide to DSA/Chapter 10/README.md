## Overview

The purpose of this chapter is to introduce the concept of recursion.

Recursion is when a function calls itself, this is used tackle tricky problems

## An example of recursion in action

This will run forever until it will get a call stack error as this function doesn't have an base case

```
function blah() {
    blah();
}
```

;

### Factorial in ruby

```
def factorial(number)
    if number == 1
        return 1
    else
        return number * factorial(number - 1)
    end
end
```
