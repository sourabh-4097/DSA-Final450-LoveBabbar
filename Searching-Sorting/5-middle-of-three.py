# Problem link - https://practice.geeksforgeeks.org/problems/middle-of-three2926/1

# Given three distinct numbers A, B and C. Find the number with value in middle (Try to do it with minimum comparisons).

# Input:
# A = 978, B = 518, C = 300
# Output:
# 518
# Explanation:
# Since 518>300 and 518<978, so 
# 518 is the middle element.


def middle(A,B,C):
    # arr = [A,B,C]
    # arr.sort()
    # return arr[1]

    # another solution
    mi = min(A,B,C)
    ma = max(A,B,C)
    ans = (A+B+C) - (mi+ma)
    return ans

print(middle(33,434,5566))
