# Given a string s1 and a string s2, write a function to check whether s2 is a rotation of s1. 

# Input: S1 = ABCD, S2 = CDAB
# Output: Strings are rotations of each other

# Input: S1 = ABCD, S2 = ACBD
# Output: Strings are not rotations of each other

# O(n1 + n2) space and time
def solveBrute(s1, s2):
    l1 = len(s1)
    l2 = len(s2)

    if l1 != l2:
        return False
    q1 = []
    q2 = []

    for i in range(l1):
        q1.insert(0, s1[i])

    for i in range(l2):
        q2.insert(0, s2[i])

    for i in range(l1):
        popped = q2.pop()
        q2.insert(0,popped)
        if q1 == q2:
            return True
    return False

S1 = "ABCD"
S2 = "CDAB"

S3 = "ABCD"
S4 = "ACBD"

print(solveBrute(S1, S2))
print(solveBrute(S3, S4))


# O(n1 + n2) space and time
def solve2(str1, str2):
    n = len(str1)
    m = len(str2)

    if n != m:
        return False
    
    temp = str1 + str1

    if temp.count(str2) > 0:
        return 1
    else:
        return 0

S1 = "ABCD"
S2 = "CDAB"

S3 = "ABCD"
S4 = "ACBD"

print(solve2(S1, S2))
print(solve2(S3, S4))