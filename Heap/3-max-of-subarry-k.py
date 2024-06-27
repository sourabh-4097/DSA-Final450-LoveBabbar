# Problem link - https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/

# Given an array and an integer K, find the maximum for each and every contiguous subarray of size k.

# Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
# Output: 3 3 4 5 5 5 6
# Explanation: 
# Maximum of 1, 2, 3 is 3
# Maximum of 2, 3, 1 is 3
# Maximum of 3, 1, 4 is 4
# Maximum of 1, 4, 5 is 5
# Maximum of 4, 5, 2 is 5 
# Maximum of 5, 2, 3 is 5
# Maximum of 2, 3, 6 is 6

from collections import deque 

def solve(arr,k):
    n = len(arr)
    de = deque([])
    ans = []

    for i in range(n):
        if len(de) != 0 and de[0] == i - k:
            de.popleft()
        while len(de) != 0 and arr[de[-1]] < arr[i]:
            de.pop()
        de.append(i)
        if i >= k-1:
            ans.append(arr[de[0]])
    return ans


arr = [1, 2, 3, 1, 4, 5, 2, 3, 6]
# arr = [1, 10, 3, 4,5,6,7]
k = 3

print(solve(arr,k))