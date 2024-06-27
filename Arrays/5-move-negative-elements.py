# Problem link - https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

# Problem Description -
# An array contains both positive and negative numbers in random order.
# Rearrange the array elements so that all negative numbers appear before all positive numbers.

# Examples :
# Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
# Output: -12 -13 -5 -7 -3 -6 11 6 5


# Brute-force
def moveNegativeElements(arr):
  arr.sort()
  return arr



# optimized soltuion
def moveNegativeElementsOptimized(arr):
  low = 0
  mid = 0
  n = len(arr)
  while mid <= n-1:
    if(arr[mid]<0):
      temp = arr[mid]
      arr[mid] = arr[low]
      arr[low] = temp
      mid += 1
      low += 1
    else:
      mid += 1

  return arr

def moveNegativeElementsForLoop(arr):
  j = 0
  n = len(arr)
  for i in range(n):
    if arr[i] < 0:
      tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
      j += 1
  return arr



# print(moveNegativeElements([-1,-1,3,4,-4,5,-5,8,-9,1,-77]))
print(moveNegativeElementsOptimized([-1,-1,3,4,-4,5,-5,8,-9,1,-77], ))
print(moveNegativeElementsForLoop([-1,-1,3,4,-4,5,-5,8,-9,1,-77], ))