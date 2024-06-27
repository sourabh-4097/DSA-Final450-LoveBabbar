# Problem link - https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1

# Given an unsorted array Arr of size N of positive integers. One number A from set {1, 2, N} is missing and one number B
# occurs twice in array. Find these two numbers.

# Input:
# N = 2
# Arr[] = {2, 2}
# Output: 2 1
# Explanation: Repeating number is 2 and 
# smallest positive missing number is 1.

def solve(arr,n):
    repeat = 0
    missing = 0
    for i in range(n):
        if arr[abs(arr[i])-1] < 0:
            repeat = abs(arr[i])
        else:
            arr[abs(arr[i])-1] = arr[abs(arr[i])-1] * -1

    for i in range(n):
        if arr[i] > 0:
            missing = i+1
            break
    return [repeat,missing]

    # aditya verma intuition
    # n = len(arr)
    # i = 0
    # while i < n:
    #     while arr[i] != i+1:
    #         if arr[arr[i]-1] == arr[i]:
    #             break
    #         arr[arr[i]-1],arr[i] = arr[i], arr[arr[i]-1]
    #     i += 1
    
    # for i in range(n):
    #     if arr[i] != i+1:
    #         repeat = arr[i]
    #         missing = i+1
    #         break
    # return [repeat,missing]


arr = [2,1,2,4,5]
n = len(arr)
print(solve(arr,n))