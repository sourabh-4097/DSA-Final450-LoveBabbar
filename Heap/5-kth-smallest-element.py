# Problem link - https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/

# Given an array and a number k where k is smaller than the size of the array, we need to find the k th smallest element
# in the given array. It is given that all array elements are distinct.

# Input: arr[] = {7, 10, 4, 3, 20, 15}, k = 3 
# Output: 7

# Input: arr[] = {7, 10, 4, 3, 20, 15}, k = 4 
# Output: 10 

import heapq
def solve(arr,k):
    heapq.heapify(arr)
    while k > 1:
        heapq.heappop(arr)
        k -= 1
    ans = heapq.heappop(arr)
    return ans

arr = [7, 10, 4, 3, 20, 15]
k = 4

print(solve(arr,k))
