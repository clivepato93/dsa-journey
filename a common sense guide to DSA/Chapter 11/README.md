## Overview

The purpose of this chapter is to continue with the concepts of recursion. We begin to write out own recursive functions

An example:

```
a # [1, 2, 3, 4, 5]
def double_array(array):
index = 0
    while (index < len(array)):
        array[index] *= 2
        index += 1
    return array

def double_array(array, index=0):
''' Base case: when the index goes past the end of the array '''
    if (index >= len(array)):
        return
    array[index] *= 2
    double_array(array, index + 1)
    return array
```

## The Top-Down Thought Process

If you haven’t done a lot of top-down recursion before, it takes time and
practice to learn to think in this way. However, I found that when tackling a
top-down problem, it helps to think the following three thoughts:

1. Imagine the function you’re writing has already been implemented by
   someone else.
2. Identify the subproblem of the problem.
3. See what happens when you call the function on the subproblem and go
   from there.
   While these steps sound vague at the moment, they’ll become more clear
   through the following examples.

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
