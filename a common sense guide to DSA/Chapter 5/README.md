## Overview

The purpose of this chapter is to show how two algorithms have the same run time but one can operate better than the other as well showing how an algorithm of O(N) can perform slower compared to an O(N^2).

This chapter introduces Selection Sort

Selection Sort has a time complexity of O(N^2), where N is the number of elements in the array, because it involves two nested loops. Despite its simplicity, Selection Sort is generally inefficient on large lists and is not used for large-scale data sets when more efficient algorithms like quicksort or mergesort are available.

For example if we had an array of 5 elements the worse case scenario may be as follows:

4 + 3 + 2 + 1 = 10 comparisons.
and 4 swaps

This is a total of 5\*\*2/2 = 12.5 which is similar to 14

Two O(N) run time algorithms but the second one is faster than the other

```
def print_numbers_version_one(upperLimit):
number = 2
while number <= upperLimit:
# If number is even, print it:
if number % 2 == 0:
print(number)
number += 1
def print_numbers_version_two(upperLimit):
number = 2
while number <= upperLimit:
print(number)
# Increase number by 2, which, by definition,
# is the next even number:
number += 2
```
