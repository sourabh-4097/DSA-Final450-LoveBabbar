# Problem link - https://practice.geeksforgeeks.org/problems/kth-smallest-element/0

# Problem Description -
# Given an array arr[] and an integer K where K is smaller than size of array,
# the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct

# Examples :
# Input:
# N = 6
# arr[] = 7 10 4 3 20 15
# K = 3
# Output : 7
# Explanation :
# 3rd smallest element in the given
# array is 7.



def kthSmallest(arr, k):
  arr.sort()
  return arr[k-1]

print(kthSmallest([10,11,2,3,4,5],2))