# Problem link - https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-n/k-times



def solve(arr,n,k):
    x = n//k
    freq = {}
    ans = []
    for i in range(n):
        if arr[i] in freq:
            freq[arr[i]] += 1
        else:
            freq[arr[i]] = 1
    for i in freq.keys():
        if freq[i] > x:
            ans.append(i)
    return ans



test_cases = [
    [1, 1, 2, 2, 3, 5, 4, 2, 2, 3, 1, 1, 1],
    [3, 1, 2, 2, 1, 2, 3, 3],
    [4, 5, 6, 7, 8, 4, 4]
]

for i in test_cases:
    print(solve(i, len(i), 3))