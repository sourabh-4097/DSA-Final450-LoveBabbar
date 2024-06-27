# Given an array arr[] of N non-negative integers representing the height of blocks.
# If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 

# Input:
# N = 6
# arr[] = {3,0,0,2,0,4}
# Output:
# 10

# Input:
# N = 3
# arr[] = {6,9,9}
# Output:
# 0
# Explanation:
# No water will be trapped.



def trappingWater(arr,n):

    # O(n) time and O(1) space
    lo = 0
    hi = n - 1
    maxL = 0
    maxR = 0
    ans = 0

    while li <= hi:
        if arr[lo] < arr[hi]:
            if arr[lo] > maxL:
                maxL = arr[lo]
            else:
                ans += maxL - arr[lo]
            lo += 1
        else:
            if arr[hi] > maxR:
                maxR = arr[hi]
            else:
                ans += maxR - arr[hi]
            hi -= 1
    return ans




    ## O(n) space and O(n) time
    totalWater = 0
    lm = [0 for i in range(n)]
    rm = [0 for i in range(n)]
    maxx = arr[0]
    for i in range(n):
        if arr[i] > maxx:
            maxx = arr[i]
        lm[i] = maxx
        
    maxx = arr[n-1]
    for i in range(n-1, -1, -1):
        if arr[i] > maxx:
            maxx = arr[i]
        rm[i] = maxx
        
    for i in range(n):
        totalWater += (min(lm[i], rm[i]) - arr[i])
    return totalWater
        


    ## 100 passing out of 152 cases TLE
    # totalWater = 0
        
    # for i in range(1, n-1):
    #     lMax = max(arr[:i])
    #     rMax = max(arr[i+1:])
    #     maxWater = min(lMax, rMax)
    #     waterFilled = maxWater - arr[i]
    #     if waterFilled > 0:
    #         totalWater += waterFilled
    # return totalWater