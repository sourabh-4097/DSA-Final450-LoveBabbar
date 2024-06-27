# Problem link - https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

# Problem Description -
# Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number)
# which has the maximum sum and return its sum.

# Examples :

# Input:
# N = 5
# Arr[] = {1,2,3,-2,5}
# Output:
# 9
# Explanation:
# Max subarray sum is 9
# of elements (1, 2, 3, -2, 5) which
# is a contiguous subarray.

# Input:
# N = 4
# Arr[] = {-1,-2,-3,-4}
# Output:
# -1
# Explanation:
# Max subarray sum is -1
# of element (-1)



def maxSubArraySumBruteForce(arr,N):
    maxx = arr[0]
    for i in range(N):
      summ = 0
      for j in range(i,N):
        summ += arr[j]
        if summ > maxx:
          maxx = summ
    return maxx

def maxSubArraySum(arr,N):
  maxSum = arr[0]
  currSum = 0
  for i in range(0,N):
      currSum = currSum + arr[i]
      if currSum>maxSum:
        maxSum = currSum
      if currSum<0:
        currSum = 0
  
  return maxSum


print(maxSubArraySum([1, 2, 3, -2, 5], 5))
