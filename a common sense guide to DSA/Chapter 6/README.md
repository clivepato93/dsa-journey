## Overview

The purpose of this chapter is to provide guidance on how to analyze in the best case scenario & it introduces another algorithm which is the insertionSort .

In the worst-case scenario, when the input array is in reverse order, each element in the unsorted subarray may need to be compared with every element in the sorted subarray before finding its correct position. This results in approximately N/2 comparisons on average for each element, leading to a time complexity of O(N^2) in the worst case.

We can, therefore, formulate the total number of comparisons as:
1 + 2 + 3 + … + (N - 1) comparisons.
In our example array that contains five elements, that’s a maximum of:
1 + 2 + 3 + 4 = 10 comparisons.
For an array containing 10 elements, there would be:
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 comparisons.
For an array containing 20 elements, there would be a total of 190 comparisons, and so on.

The Average Case
Indeed, in a worst-case scenario, Selection Sort is faster than Insertion Sort.
However, it is critical we also take into account the average-case scenario.
Why?
By definition, the cases that occur most frequently are average scenarios.
Take a look at this simple bell curve:

![graph for average scenario ](<graph for average.png>)

![numbers for all cases scenario ](<numbers for cases.png>)
