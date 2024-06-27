# Problem link - https://leetcode.com/problems/search-in-rotated-sorted-array/

# Input: nums = [4,5,6,7,0,1,2], target = 0
# Output: 4

# Input: nums = [4,5,6,7,0,1,2], target = 3
# Output: -1



def search(nums, target):
    # o(1) time
    if target in nums:
        return nums.index(target)
    else:
        return -1






# exception handling code
    # try:
    #     return nums.index(target)
    # except:
    #     return -1