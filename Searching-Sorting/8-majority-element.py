# Problem link - https://practice.geeksforgeeks.org/problems/majority-element-1587115620/1

# Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an 
# element that appears more than N/2 times in the array.

# Input:
# N = 3 
# A[] = {1,2,3} 
# Output:
# -1
# Explanation:
# Since, each element in 
# {1,2,3} appears only once so there 
# is no majority element.

# Input:
# N = 5 
# A[] = {3,1,3,3,2} 
# Output:
# 3
# Explanation:
# Since, 3 is present more
# than N/2 times, so it is 
# the majority element.



def majorityElement(A, N):
    # simple approach could be creating map traversing it --O(N) space and time
    # this approach O(N) time but O(1) space
    ma = A[0]
    count = 1
        
    for i in range(1,N):
        if A[i] == ma:
            count += 1
        else:
            count -= 1
        if count == 0:
            ma = A[i]
            count = 1
    ele = A.count(ma)
    if ele > N//2:
        return ma
    else:
        return -1


arr = [3,3,4,4,3]
n = len(arr)

print(majorityElement(arr,n))