
# Problem link - https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/

# Given a binary string str of length N, the task is to find the maximum count of consecutive substrings str can be divided into such
# that all the substrings are balanced i.e. they have equal number of 0s and 1s. If it is not possible to split str satisfying the
# conditions then print -1.

# Input: str = 0100110101
# Output: 4 
# The required substrings are 01, 0011, 01 and 01.

# Input: str = 0111100010
# Output: 3 

# Input: str = 0000000000
# Output: -1



def solve(string, n):
    zero_count = 0
    one_count = 0

    ans = 0

    for i in range(n):
        if string[i] == "0":
            zero_count += 1
        if string[i] == "1":
            one_count += 1
        
        if zero_count == one_count :
            ans += 1
    if zero_count != one_count:
        return -1
    return ans

test_cases = [
    '0100110101',
    '0111100010',
    '0000000000'
]

for i in test_cases:
    print(solve(i, len(i)))
