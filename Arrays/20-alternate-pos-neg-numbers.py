# Prblem link - https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/
# Given an array of positive and negative numbers, arrange them in an alternate fashion such that every positive number is followed by 
# negative and vice-versa maintaining the order of appearance. 
# Number of positive and negative numbers need not be equal. 
# If there are more positive numbers they appear at the end of the array. 
# If there are more negative numbers, they too appear in the end of the array.

# Input:  arr[] = {1, 2, 3, -4, -1, 4}
# Output: arr[] = {-4, 1, -1, 2, 3, 4}

# Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
# output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}



def solve(arr):
    n = len(arr)
    for i in range(n):
        j = i
        if i%2 == 0:
            while j < n and arr[j] >= 0:
                j += 1
            if j < n:
                arr[i], arr[j] = arr[j], arr[i]
        else:
            while j < n and arr[j] < 0:
                j += 1
            if j < n:
                
                arr[i],arr[j] = arr[j],arr[i]
    return arr
    

arrs = [
    [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8],
    [1, 2, 3, -4, -1, -4, -1],
    [1,2,2,3,3],
    [0,0,0,0],
    [-1,-1,-2],
    [1,2,3,3,4,-5,-5,-9],
    [-1,-2,-3,10]
    ]
arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
for i in arrs:
    print(solve(i))