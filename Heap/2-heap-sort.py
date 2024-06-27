# Problem link - https://www.geeksforgeeks.org/heap-sort/


import heapq

def solve(arr):
    n = len(arr)
    sa = []
    heapq.heapify(arr)
    for i in range(n):
        sa.append(heapq.heappop(arr))
    
    return sa

arr = [3,5,1,4,5,20,0]
print(solve(arr))
