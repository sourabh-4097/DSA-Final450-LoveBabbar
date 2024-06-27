# Problem link - https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1

# Given an array Arr of N positive integers, find K largest elements from the array.
# The output elements should be printed in decreasing order.

# Input:
# N = 5, K = 2
# Arr[] = {12, 5, 787, 1, 23}
# Output: 787 23
# Explanation: 1st largest element in the
# array is 787 and second largest is 23.

import heapq

# my way
def kLargest(arr, n, k):
	count = n - k
	heapq.heapify(arr)
	upd = []
	for i in range(n):
		if count > 0:
			heapq.heappop(arr)
			count -= 1
		else:
			upd.insert(0,heapq.heappop(arr))
	return upd
	

# return k elements in any order ( not sorted )
# def kLargest(arr, n, k):
#     count = n - k
#     upd = []
#     heapq.heapify(upd)
#     for i in range(n):
#         heapq.heappush(upd, arr[i])
#         if len(upd) > k:
#             heapq.heappop(upd)
            
#     return upd

arr = [12, 5, 787, 1, 23]
n = 5
k = 2
print(kLargest(arr,n,k))