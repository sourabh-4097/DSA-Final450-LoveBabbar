# Problem link - https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0

# Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. 
# Each packet can have a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M 
# students such that :
# 1. Each student gets exactly one packet.
# 2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

# Input:
# N = 8, M = 5
# A = {3, 4, 1, 9, 56, 7, 9, 12}
# Output: 6
# Explanation: The minimum difference between 
# maximum chocolates and minimum chocolates 
# is 9 - 3 = 6 by choosing following M packets :
# {3, 4, 9, 7, 9}.

# Input:
# N = 7, M = 3
# A = {7, 3, 2, 4, 9, 12, 56}
# Output: 2
# Explanation: The minimum difference between
# maximum chocolates and minimum chocolates
# is 4 - 2 = 2 by choosing following M packets :
# {3, 2, 4}.


def findMinDiff(A,N,M):
    A.sort()
    mini = float('inf')
    for i in range(N):
        if i+M <= N:
            diff = A[M+i-1] - A[i]
            mini = min(mini, diff)
    return mini

arr = [7, 3, 2, 4, 9, 12, 56]
n = 7
m = 3

print(findMinDiff(arr,n,m))