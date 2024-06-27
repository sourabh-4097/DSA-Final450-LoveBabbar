# Problem link - https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0

# Problem Description -
# Given an array, rotate the array by one position in clock-wise direction.

# Examples :
# Input:
# N = 5
# A[] = {1, 2, 3, 4, 5}
# Output:
# 5 1 2 3 4


def rotate(arr):
  last = arr.pop()
  arr.insert(0,last)
  return arr


print(rotate([1, 2, 3, 4, 5]))

