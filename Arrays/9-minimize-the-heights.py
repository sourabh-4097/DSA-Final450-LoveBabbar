# Problem link - https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1

# Problem Description -
# Given an array arr[] denoting heights of N towers and a positive integer K, you have to modify the height of each tower
# either by increasing or decreasing them by K only once. After modifying, height should be a non-negative integer. 
# Find out the minimum possible difference of the height of shortest and longest towers after you have modified each tower.

# Examples :

# Input:
# K = 2, N = 4
# Arr[] = {1, 5, 8, 10}
# Output:
# 5
# Explanation:
# The array can be modified as 
# {3, 3, 6, 8}. The difference between 
# the largest and the smallest is 8-3 = 5.

# Input:
# K = 3, N = 5
# Arr[] = {3, 9, 12, 16, 20}
# Output:
# 11
# Explanation:
# The array can be modified as
# {6, 12, 9, 13, 17}. The difference between 
# the largest and the smallest is 17-6 = 11. 



# const getMinDiff = (arr, N, K)=>{
#     arr.sort(function(a,b){return a-b})
#     let ans = arr[N-1] - arr[0]

#     let smallest = arr[0]+K
#     let largest = arr[N-1]-K
#     let mi, ma

#     for(let i=0; i<N; i++){
#         mi = Math.min(smallest, arr[i]-K)
#         ma = Math.max(largest, arr[i]+K)

#         if(mi<0){
#             continue
#         }
#         ans = Math.min(ans, ma-mi)
#     }
#     return ans
# }
  
def getMinDiff(arr,n,K):
    arr.sort()
    smallest = arr[0]+K
    largest = arr[n-1]-K

    ans = arr[n-1] - arr[0]
    for i in range(n-1):
        mi = min(smallest, arr[i+1]-K)
        print(mi)
        ma = max(largest, arr[i]+K)
        print(ma)
        if mi<0:
            continue
        ans = min(ans, ma-mi)
        print(ans)
    return ans


# print(getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5))
# print(getMinDiff([4,6,10,25], 4, 5))
print(getMinDiff([4,6,20,22], 4, 5))

  