# Problem link - https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/


def solve(arr):
    n = len(arr)
    ma = arr[n-1]
    mi = arr[0]
    
    dp = [0 for i in range(n)]
    
    for i in range(n-2, -1, -1):
        if arr[i] > ma:
            ma = arr[i]
        dp[i] = max(dp[i+1], ma-arr[i])
        
    for i in range(1,n):
        if arr[i]< mi:
            mi = arr[i]
        dp[i] = max(dp[i-1], dp[i] + arr[i]-mi) 
    return dp[n-1]

test_cases = [
    [10, 22, 5, 75, 65, 80],
    [2, 30, 15, 10, 8, 25, 80],
    [100, 30, 15, 10, 8, 25, 80],
    [90, 80, 70, 60, 50]
    ]
for i in test_cases:
    print(solve(i))

# print(solve([10, 2, 5, 75, 65, 80]))