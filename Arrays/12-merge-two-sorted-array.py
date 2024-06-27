# Problem Description -
# Given two sorted arrays arr1[] of size N and arr2[] of size M. Each array is sorted in non-decreasing order.
#  Merge the two arrays into one sorted array in non-decreasing order without using any extra space.

#  Examples :
#  Input:
# N = 4, M = 5
# arr1[] = {1, 3, 5, 7}
# arr2[] = {0, 2, 6, 8, 9}

# Output: 0 1 2 3 5 6 7 8 9

# Explanation: Since you can't use any
# extra space, modify the given arrays
# to form

# arr1[] = {0, 1, 2, 3}
#  arr2[] = {5, 6, 7, 8, 9}

def merge(arr1, arr2):
    i = 0 
    j = 0
    n = len(arr1)
    m = len(arr2)
    k = n-1
    
    while i <= k and j < m:
        if arr1[i] < arr2[j]:
            i += 1
        else:
            tmp = arr2[j]
            arr2[j] = arr1[k]
            arr1[k] = tmp
            j += 1
            k -= 1
    arr1.sort()
    arr2.sort()
    return [arr1,arr2]
    
# arr1 = [1, 5, 9]
# arr2 = [2, 3, 8, 13,25]


# print(merge(arr1,arr2))

def twomerge(arr1, arr2):
    n = len(arr1)
    m = len(arr2)
    i = 0
    j = 0

    while i < n:
        if arr1[i] > arr2[j]:
            arr1[i], arr2[j] = arr2[j], arr1[i]
        
        i += 1
        arr2.sort()
    return [arr1, arr2]


arr1 = [1, 5, 9]
arr2 = [2, 3, 8, 13,25]


print(twomerge(arr1,arr2))
