#  Problem link - https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

#  Problem Description -
#  Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

# Examples :
#  Input:
#  N = 6
#  A[] = {3, 2, 1, 56, 10000, 167}
# Output:
# min = 1, max =  10000

def getMinMax( a, n):
  minNum = a[0]
  maxNum = a[0]
  for i in range(n):
    if a[i]<minNum:
      minNum = a[i]
    if a[i] > maxNum:
      maxNum = a[i]
  
  return [minNum,maxNum]

print(getMinMax([3, 2, 1, 56, 10000, 167],6))