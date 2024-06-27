# Given a square matrix, turn it by 90 degrees in a clockwise direction without using any extra space.

# Input:
# 1 2 3 
# 4 5 6
# 7 8 9  
# Output:
# 7 4 1 
# 8 5 2
# 9 6 3

# Input:
# 1 2
# 3 4
# Output:
# 3 1
# 4 2 



def solve(mat):
    res = []
    n = len(mat)
    for i in range(n):
        row = []
        for j in range(n-1, -1, -1):
            row.append(mat[j][i])
        res.append(row)
    return res

mat = [ [ 1, 2, 3, 4 ],
          [ 5, 6, 7, 8 ],
          [ 9, 10, 11, 12 ],
          [ 13, 14, 15, 16 ] ]

print(solve(mat))


## O(1) space efficient ------------------>>

def rotate(arr, N):
    # First rotation
# with respect to main diagonal
    for i in range(N):
        for j in range(i):
            temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
 
    # Second rotation
# with respect to middle column
    for i in range(N):
        for j in range(int(N/2)):
            temp = arr[i][j]
            arr[i][j] = arr[i][N-j-1]
            arr[i][N-j-1] = temp
 
 
# Driver code
arr = [[1, 2, 3, 4],
       [5, 6, 7, 8],
       [9, 10, 11, 12],
       [13, 14, 15, 16]]
 
rotate(arr, len(arr))