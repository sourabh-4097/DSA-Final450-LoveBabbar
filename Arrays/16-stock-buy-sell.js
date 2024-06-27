// Problem link - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Problem Description -
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Examples :
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.




// Pseudo-code / EXPLAINATION
// start with two variables maxProfit and minimal ( which is minimum value of left side of pointer in array )
// Traverse array and find max difference between minimal and array elements

var maxProfit = function (prices) {
  // Brute-force solution --------------------->

  // let maxP = -1
  // for(let i =0; i<prices.length; i++){
  //     for(let j=i; j<prices.length; j++){
  //         maxP = Math.max(maxP, prices[j]-prices[i] )
  //     }
  // }
  // return maxP > 0 ? maxP: 0




  
  // Optimized solution ------------------>
  let maxP = 0;
  let minimal = prices[0];

  for (let i = 0; i <= prices.length - 1; i++) {
    currPrice = prices[i];
    if (currPrice < minimal) {
      minimal = currPrice;
    }
    maxP = Math.max(maxP, currPrice - minimal);
  }
  return maxP;
};

console.log(maxProfit([3, 2, 1, 6, 7]));
