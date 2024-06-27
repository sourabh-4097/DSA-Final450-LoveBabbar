# Problem link - https://practice.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1

# Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.

# Input:
# 5
# 4 2 -3 1 6
# Output: 
# Yes

# Explanation: 
# 2, -3, 1 is the subarray with sum 0.

# Input:
# 5
# 4 2 0 1 6
# Output: 
# Yes

# Explanation: 
# 0 is one of the element 
# in the array so there exist a 
# subarray with sum 0.

def subArrayExists(arr,n):
    sub_map = {}
    summ = 0
    for i in range(n):
        summ += arr[i]
        if arr[i] == 0 or summ == 0 or summ in sub_map:
            return True
        sub_map[summ] = 1
            
    return False

test_cases = [
    [4, 2, 0, 1, 6],
    [4, 2, -3, 1, 6],
    [0],
    [-1,-2,4]
]

# for i in test_cases:
#     print(subArrayExists(i, len(i)))




def subArrayWithGivenSumExists(arr, n, target_sum):
    sub_map = {}
    summ = 0
    for i in range(n):
        summ += arr[i]
        
        # Check if current sum equals target_sum
        if summ == target_sum:
            return True
        
        # Check if (current sum - target sum) has been seen before
        if (summ - target_sum) in sub_map:
            return True
        
        # Store current sum in the map
        sub_map[summ] = 1
    
    return False

# Example usage:
arr = [5, 33, 0]
target_sum = 0
n = len(arr)
print(subArrayWithGivenSumExists(arr, n, target_sum))  # Output: True
