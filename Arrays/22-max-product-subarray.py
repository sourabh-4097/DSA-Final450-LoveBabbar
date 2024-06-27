# Problem link - https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1

# Given an array Arr[] that contains N integers (may be positive, negative or zero). Find the product of the maximum product subarray.

# Input:
# N = 5
# Arr[] = {6, -3, -10, 0, 2}
# Output: 180
# Explanation: Subarray with maximum product
# is [6, -3, -10] which gives product as 180.

# Input:
# N = 6
# Arr[] = {2, 3, 4, 5, -1, 0}
# Output: 120
# Explanation: Subarray with maximum product
# is [2, 3, 4, 5] which gives product as 120.


def maxProduct(arr, n):
	# code here
	ans = arr[0]
	ma = arr[0]
	mi = arr[0]
	
	for i in range(1,n):
	    if arr[i] < 0:
			# when we multiply by negative number, max becomes min and vice versa
	        temp = ma
	        ma = mi
	        mi = temp
	    ma = max(arr[i], arr[i]*ma)
	    mi = min(arr[i], arr[i]*mi)
	    ans = max(ans,ma,mi)
	return ans

arr = [6, -3, -10, 0, 2]

print(maxProduct(arr, len(arr)))