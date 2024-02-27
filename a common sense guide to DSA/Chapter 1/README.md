## Overview

Explains the difference of importance when you first start out as a software engineer to when you gain more experience.

When you first start you just want the code to run as expected.

Once you gain more experience you realize there are more solutions to one problem and one can perform better than the other.

The aspects of how to judge the quality of the code is through the maintainability the aspects of this are as follows:

- readability
- organization
- modularity

There is also efficiency that's used to judge the quality of code.

An example of two functions in python that do the same job but one performs faster than the other

```python
def print_numbers_version_one():
number = 2
while number <= 100:
# If number is even, print it:
if number % 2 == 0:
print(number)
number += 1
```

```python
def print_numbers_version_two():
number = 2
while number <= 100:
print(number)
# Increase number by 2, which, by definition,
# is the next even number:
number += 2
```

## Data Structures

Introduces the array data structure and the operations you can do on arrays such as:

- Read: Reading refers to looking something up at a particular spot within
  the data structure. With an array, this means looking up a value at a
  particular index. For example, looking up which grocery item is located
  at index 2 would be reading from the array.
- Search: Searching refers to looking for a particular value within a data
  structure. With an array, this means looking to see if a particular value
  exists within the array, and if so, at which index. For example, looking
  up the index of "dates" in our grocery list would be searching the array.
- Insert: Insertion refers to adding a new value to our data structure. With
  an array, this means adding a new value to an additional slot within the
  array. If we were to add "figs" to our shopping list, we’d be inserting a new
  value into the array.
- Delete: Deletion refers to removing a value from our data structure. With
  an array, this means removing one of the values from the array. For
  example, if we removed "bananas" from our grocery list, this value would
  be deleted from the array.
