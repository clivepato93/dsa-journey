## Overview

The purpose of this chapter is to show how you can speed up your algorithms based on your findings from Big O notation.

This chapter introduce Bubble Sort

Bubble Sort works by repeatedly stepping through the list of elements, comparing adjacent elements, and swapping them if they are in the wrong order. This process is repeated until the entire list is sorted. The outer loop runs N times, where N is the number of elements in the array. For each iteration of the outer loop, the inner loop compares and possibly swaps adjacent elements. In the worst-case scenario, the inner loop may need to make comparisons and swaps for each pair of elements, resulting in a total of N \* N operations.

For example if we had an array of 5 elements the worse case scenario may be as follows:

4 + 3 + 2 + 1 = 10 comparisons.
and 10 swaps

This is a total of 20 which is similar to 5\*\*2 = 25

As a result, the time complexity of Bubble Sort is quadratic, O(N^2).
