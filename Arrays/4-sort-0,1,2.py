# Problem link - https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1

# Problem Description -
# Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

# Examples :
# Input:
# N = 5
# arr[]= {0 2 1 2 0}
# Output:
# 0 0 1 2 2

# Explanation:
# 0s 1s and 2s are segregated into ascending order


def sort012(arr,n):
  mid = 0
  low = 0
  high = n-1

  while mid<high:
    if arr[mid]==1:
      mid+= 1
    elif arr[mid]==0:
      temp = arr[mid]
      arr[mid] = arr[low]
      arr[low] = temp
      mid+= 1
      low+= 1
    elif arr[mid]==2:
      temp =  arr[mid]
      arr[mid] = arr[high]
      arr[high] = temp
      high -= 1

  return arr




# print(sort012([1,0, 2, 0,0,0,2,1,0,0], 10))
print(sort012([1,0, 2, 2, 0, 0], 6))

