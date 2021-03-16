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
  const graph = {};
  for (let i = 1; i <= n; i += 1) graph[i] = [];

  for (let i = 0; i < times.length; i += 1) {
    const [u, v, w] = times[i];
    graph[v].push([u, w]); // reverse the paths
  }

  const pathsToK = {}; // node: shortest path to start;
  const dfs = (u, dist) => {
    if (u === k) return dist;
    let shortest = Number.POSITIVE_INFINITY;
    for (let i = 0; i < graph[u].length; i += 1) {
      const [v, w] = graph[u][i];
      shortest = Math.min(shortest, dfs(v, w + dist));
    }
    return shortest; // reach a dead end we return infinity (never shortest path)
  };

  let longestOfShortest = -1;
  for (let i = 1; i <= n; i += 1) {
    longestOfShortest = Math.max(longestOfShortest, dfs(i, 0));
  }
  return longestOfShortest !== Number.POSITIVE_INFINITY ? longestOfShortest : -1;

  // const graph = {};
  // for (let i = 0; i < times.length; i += 1) {
  //   const [u, v, w] = times[i];
  //   const edge = [v, w];
  //   graph[u] = graph[u] ? [...graph[u], edge] : [edge];
  // }
  // const pathTo = {};
  // function findPaths(u, curDist) {
  //   if (pathTo[u] === undefined) pathTo[u] = curDist;
  //   else pathTo[u] = Math.min(curDist, pathTo[u]);
  //   while (graph[u] && graph[u].length > 0) {
  //     const [v, w] = graph[u].pop();
  //     findPaths(v, curDist + w);
  //   }
  // }
  // findPaths(k, 0);
  // let longestPath = 0;
  // for (let i = 1; i <= n; i += 1) {
  //   if (pathTo[i] === undefined) return -1;
  //   longestPath = Math.max(pathTo[i], longestPath);
  // }
  // return longestPath;
};

(function () {
  console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2), 'expecting 2');
  console.log(networkDelayTime([[1, 2, 1]], 2, 1), 'expecting 1');
  console.log(networkDelayTime([[1, 2, 1]], 2, 2), 'expecting -1');
  console.log(networkDelayTime([[1, 2, 1], [2, 1, 3]], 2, 2), 'expecting 3');
  console.log(networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 2]], 3, 1), 'expecting 2');
}());
