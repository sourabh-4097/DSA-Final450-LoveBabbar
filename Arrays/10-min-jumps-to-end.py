# Problem link - https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1

# Problem Description -
# Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element.
# Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot
# move through that element.

# Note: Return -1 if you can't reach the end of the array.

# Examples :

# Input:
# N = 11
# arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
# Output: 3
# Explanation:
# First jump from 1st element to 2nd
# element with value 3. Now, from here
# we jump to 5th element with value 9,
# and from here we will jump to the last.

# Input:
# N = 6
# arr = {1, 4, 3, 2, 6, 7}
# Output: 2
# Explanation:
# First we jump from the 1st to 2nd element
# and then jump to the last element.



def minJumps(arr,n):
  jump = 1
  maxReach = arr[0]
  steps = arr[0]

  if n==1:
    return jump

  if arr[0]==0:
    return -1
  
  for i in range(1,n):
    if i==n-1:
      return jump
    
    maxReach = max(maxReach, arr[i]+i)
    steps -= 1

    if(steps==0):
      jump += 1
      if(maxReach <= i):
        return -1
      steps = maxReach - i


# print(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11))
# print(minJumps([1,3,5,11,8,2,4], 7))

def minJumUpdated(arr, n):
  print(111111)
  pos = 0
  des = 0
  jump = 0

  for i in range(n-1):
    des = max(des, arr[i]+i)

    if pos == i:
      pos = des
      jump += 1

  return jump

print(minJumUpdated([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11))
