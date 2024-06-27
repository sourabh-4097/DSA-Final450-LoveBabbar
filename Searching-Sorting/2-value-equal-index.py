# Problem link - https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1

# Given an array Arr of N positive integers. Your task is to find the elements whose value is 
# equal to that of its index value ( Consider 1-based indexing ).

# Input: 
# N = 5
# Arr[] = {15, 2, 45, 12, 7}
# Output: 2
# Explanation: Only Arr[2] = 2 exists here.

def valueEqualToIndex(self,arr, n):
	ans = []
	for i in range(n):
	    if arr[i] == i+1:
	        ans.append(arr[i])
	return ans

