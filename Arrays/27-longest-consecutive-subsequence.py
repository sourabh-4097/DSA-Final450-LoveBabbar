# Given an array of positive integers. Find the length of the longest sub-sequence
# such that elements in the subsequence are consecutive integers, the consecutive 
# numbers can be in any order.

# Input:
# N = 7
# a[] = {2,6,1,9,4,5,3}
# Output:
# 6
# Explanation:
# The consecutive numbers here
# are 1, 2, 3, 4, 5, 6. These 6 
# numbers form the longest consecutive
# subsquence.


def findLongestConseqSubseq(self,arr, N):
    map = {}
    maxl = 1
    for i in range(N):
        ele = arr[i]
        map[ele] = 1
        
    for i in range(N):
        ele = arr[i]
        if (ele - 1) in map:
            continue
        else:
            le = 0
            while ele in map:
                le += 1
                ele += 1
            if le > maxl:
                maxl = le
    return maxl
                


## Brute force ------> O(n log(n)) time
    # arr.sort()
    # longg = 1
    # length = 1
    # for i in range(N-1):
    #     if arr[i+1] == arr[i] + 1:
    #         length += 1
    #     else:
    #         if arr[i+1] != arr[i]:
    #             length = 1

    #     if length > longg:
    #         longg = length
    # return longg