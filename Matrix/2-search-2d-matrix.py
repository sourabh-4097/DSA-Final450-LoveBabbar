# Problem link - https://leetcode.com/problems/search-a-2d-matrix/

# Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

# Integers in each row are sorted from left to right.
# The first integer of each row is greater than the last integer of the previous row.


# naive approach
def searchMatrix(matrix, target):
    m = len(matrix)
    n = len(matrix[0])
        
    for i in range(m):
        for j in range(n):
            if matrix[i][j] > target:
                return False
            if matrix[i][j] == target:
                return True
    return False

# improved approach --> binary search
def solve1(matrix, t):
    m = len(matrix)
    n = len(matrix[0])
    
    for i in range(m):
        high = n-1
        low = 0
        while low <= high:
            mid = (high + low)//2
            if matrix[i][mid] < t:
                low = mid + 1
            elif matrix[i][mid] > t:
                high = mid - 1
            else:
                return [i, mid]
    return -1

matrix = [[2,3,5,7],[10,11,16,20],[23,30,34,60]]

print(solve1(matrix,1))

# optimised at best
def solve2(matrix, t):
    m = len(matrix)
    n = len(matrix[0])
    i = 0
    j = n - 1
    
    while j >= 0 and i < m:
        if matrix[i][j]> t:
            j -= 1
        elif matrix[i][j] < t:
            i += 1
        else:
            return [i,j]

    return -1

matrix = [[2,3,5,7],[10,11,16,20],[23,30,34,60]]

print(solve2(matrix,60))


# improved striver binary search

def solve3(matrix, t):
    m = len(matrix)
    n = len(matrix[0])
    high = n*m-1
    low = 0
    while low <= high:
        mid = (high + low)//2
        if matrix[mid//n][mid%n] < t:
            low = mid + 1
        elif matrix[mid//n][mid%n] > t:
            high = mid - 1
        else:
            return [mid//n, mid%n]
    return -1

matrix = [[2,3,5,7],[10,11,16,20],[23,30,34,60]]

print(solve3(matrix,2))