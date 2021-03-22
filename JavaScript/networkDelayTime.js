/*
743. Network Delay Time
You are given a network of n nodes, labeled from 1 to n. You are also given times,
a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is
 the source node, vi is the target node, and wi is the time it takes for a signal
  to travel from source to target.

We will send a signal from a given node k. Return the time it takes
 for all the n nodes to receive the signal. If it is impossible for
  all the n nodes to receive the signal, return -1.

  Example 1:

Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1

Constraints:

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
*/

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var networkDelayTime = function (times, n, k) {

};

var shortestPath = function (edges, k) {
  const graph = { /* v: [[v, w]], */ };
  // const dj = { /* v: [shortestDistK, PrevVertex]*/ };
  for (let i = 0; i < edges.length; i += 1) {
    const [u, v, w] = edges[i];
    if (!dj[u]) dj[u] = [Number.POSITIVE_INFINITY, null];
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const visit = (curV, prevV, weight) => {
    const alreadyCalcDistToK = dj[curV][0]; //starts at infinity
    const calcDistCurToK = weight + (prevV ? dj[prevV][0] : 0);
    if (calcDistCurToK < alreadyCalcDistToK) {
      dj[curV] = [calcDistCurToK, prevV];
      const paths = graph[curV];
      for (let i = 0; i < paths.length; i += 1) {
        const [v, w] = paths[i];
        visit(v, curV, w);
      }
    }
  };
  dj[k] = [0, null];
  visit(k, null, 0);
  console.log(dj);
};
(function () {
  const edges = [
    [1, 2, 6],
    [1, 4, 1],
    [4, 2, 2],
    [4, 5, 1],
    [5, 2, 2],
    [2, 5, 3],
    [5, 3, 5],
    [2, 3, 5],
  ];
  console.log(shortestPath(edges, 1), 'expecting ?');

  // console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2), 'expecting 2');
  // console.log(networkDelayTime([[1, 2, 1]], 2, 1), 'expecting 1');
  // console.log(networkDelayTime([[1, 2, 1]], 2, 2), 'expecting -1');
  // console.log(networkDelayTime([[1, 2, 1], [2, 1, 3]], 2, 2), 'expecting 3');
  // console.log(networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 2]], 3, 1), 'expecting 2');
}());
