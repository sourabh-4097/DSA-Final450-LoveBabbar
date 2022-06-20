// Problem link - https://leetcode.com/problems/merge-intervals/

// Problem Description -
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the
//  non-overlapping intervals that cover all the intervals in the input.

// Examples :
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.



// Pseudo-code / EXPLAINATION
// - check for array size of 0 or 1
// - sort the array
// - take two pointers as start and end of interval
// - if elements start is less than equal to end ---> update end with elements end
// - else push interval with [start, end] and finally, push one more [start,end] to final interval array



var mergeIntervals = function(intervals) {
    const finalInterval = []
    if (intervals.length <=1){
        return intervals
    }
    intervals.sort(function(a,b){return a[0]-b[0]})
    
    let start = intervals[0][0]
    let end = intervals[0][1]
    
    for(let i=0; i<intervals.length; i++){
        if(intervals[i][0]<=end){
            end = Math.max(end, intervals[i][1])
        }else{
            finalInterval.push([start, end])
            start = intervals[i][0]
            end = intervals[i][1]
        }
    }
    finalInterval.push([start, end])
    return finalInterval
    
};


  
  console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));

  