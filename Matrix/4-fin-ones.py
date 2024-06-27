# Problem link - https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1

# Given a boolean 2D array of n x m dimensions where each row is sorted. Find the 0-based index of the first
# row that has the maximum number of 1's.

# Input: 
# N = 4 , M = 4
# Arr[][] = {{0, 1, 1, 1},
#            {0, 0, 1, 1},
#            {1, 1, 1, 1},
#            {0, 0, 0, 0}}
# Output: 2
# Explanation: Row 2 contains 4 1's (0-based
# indexing).


def rowWithMax1s(self,arr, n, m):
    row = -1
    maxCount = 0
    for i in range(n):
        summ = sum(arr[i])
        if summ > maxCount:
            row = i
            maxCount = summ
    return row
	       

   # brute-force    

   # row = -1
   # maxCount = 0
   # for i in range(n):
   #     count = 0
   #     for j in range(m):
   #         if arr[i][j] == 1:
   #             count += 1
   #     if count > maxCount:
   #         row = i
   #         maxCount = count
   # return row