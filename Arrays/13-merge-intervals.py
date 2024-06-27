



def mergeIntervals(arr):
    n = len(arr)
    final = []
    if len(arr) <= 1:
        return arr
    arr.sort()
    start = arr[0][0]
    end = arr[0][1]

    for i in range(n):
        if arr[i][0] <= end:
            end = max(end, arr[i][1])
        else:
            final.append([start,end])
            start = arr[i][0]
            end = arr[i][1]
        
    final.append([start,end])
    return final


arr = [[1,3],[2,6],[8,10],[15,18]]


print(mergeIntervals(arr))


# Designed on 9 Jun 2024

def mergeIntUpdate(arr):
    n = len(arr)
    if n == 1:
        return arr
    
    arr.sort()
    final = []
    final.append(arr[0])

    for i in range(1,n):
        popped = final.pop()
        start1 = popped[0]
        end1 = popped[1]

        start2 = arr[i][0]
        end2 = arr[i][1]

        if end1 >= start2:
            merged = [start1, max(end1, end2)]
            final.append(merged)
        else:
            final.append(popped)
            final.append(arr[i])
    return final


    
