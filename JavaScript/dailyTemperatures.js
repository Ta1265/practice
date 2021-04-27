/*
739. Daily Temperatures
Medium

4143

128

Add to List

Share
Given a list of daily temperatures T, return a list such that,
for each day in the input, tells you how many days you would
have to wait until a warmer temperature. If there is no future
day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73],
 your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000].
 Each temperature will be an integer in the range [30, 100]

*/

var dailyTemperatures = function (T) {
  const wait = [];

  for (let i = 0; i < T.length; i += 1) {
    let j = i;
    while (j < T.length && T[i] >= T[j]) j += 1;
    wait[i] = j < T.length ? j - i : 0;
  }
  return wait;
};

(function () {
  console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
}());
