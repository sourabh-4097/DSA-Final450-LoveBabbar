# Problem link - https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x3116/1

# Given a sorted array arr containing n elements with possibly duplicate elements, the task is to find indexes of first and last
# occurrences of an element x in the given array.

# Input:
# n=9, x=5
# arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
# Output:  2 5
# Explanation: First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5. 

def find(arr,n,x):
    # code here
    first = -1
    last = -1
    count = 0
    
    for i in range(n):
        if arr[i] == x:
            if count == 0:
                first = i
                last = i
                count += 1
            else:
                last = i
    return (first, last)

arr = [1, 3, 5, 5, 5, 5, 67, 123, 125]
n = len(arr)
x = 5

print(find(arr,n,x))