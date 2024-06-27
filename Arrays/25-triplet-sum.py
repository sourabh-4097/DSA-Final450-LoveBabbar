# Problem link - https://practice.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1

# Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X.

# Input:
# n = 6, X = 13
# arr[] = [1 4 45 6 10 8]
# Output:
# 1
# Explanation:
# The triplet {1, 4, 8} in 
# the array sums up to 13.

def find3Numbers(A, n, X):
    A.sort()
    for i in range(n):
        r = n-1
        l = i+1
            
        while l < r:
            if A[i] + A[l] + A[r] == X:
                return True
            elif A[i] + A[l] + A[r] < X:
                l += 1
            else:
                r -= 1
    return False
    
arr = [1, 4, 45, 6, 10, 8]
print(find3Numbers(arr,len(arr),240))