# Problem link - https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

# Problem Description - 
# Given an array (or string), the task is to reverse the array/string.

# Examples : 
# Input  : arr[] = {1, 2, 3}
# Output : arr[] = {3, 2, 1}

def reverseWord2(arr):
    res = arr[::-1]
    return res

def reverseList(list1, start, end):
    while start < end:
        list1[start], list1[end] = list1[end], list1[start]
        start += 1
        end -= 1
    return list1


def reverseWord(str):
    reverse = ''
    for i in range(len(str)):
        reverse = reverse + str[len(str)-1-i]
    return reverse

print(reverseWord("Geeks"))

print(reverseWord2([1,2,3]))

print(reverseList(['a', 'man', 'good'], 0, 2))