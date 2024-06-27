# Problem link - https://practice.geeksforgeeks.org/problems/stickler-theif-1587115621/1

#Function to find the maximum money the thief can get.
def FindMaxSum(a, n):
        
    dp = [-1 for i in range(n+1)]
    def solve(i,a):
        if i <= -1:
            return 0
        if dp[i] != -1:
            return dp[i]
        op1 = a[i] + solve(i-2, a)
        op2 = solve(i-1,a)
        dp[i] = max(op1,op2)
        return dp[i]
        
    return solve(n-1,a)

arr = [5,5,10,100,10,5]
n = 6
print(FindMaxSum(arr,n))