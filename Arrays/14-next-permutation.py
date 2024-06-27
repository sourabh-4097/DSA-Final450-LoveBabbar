# link - https://leetcode.com/problems/next-permutation/description/


def nexPerm(arr):
    n = len(arr)
    if n == 1 or arr == None:
        return arr

    idx1 = None
    for i in range(n-2, -1, -1):
        if arr[i] < arr[i+1]:
            idx1 = i
            break
    
    if idx1 == None:
        arr.sort()
        return arr
    
    for i in range(n-1, -1, -1):
        if arr[i] > arr[idx1]:
            idx2 = i
            break
    
    arr[idx1], arr[idx2] = arr[idx2], arr[idx1]

    arr[idx1+1:] = reversed(arr[idx1+1:])

    return arr

print(nexPerm([3,2,1,4]))
print(nexPerm([4,2,3,1]))
    




# 4,2,3,1
