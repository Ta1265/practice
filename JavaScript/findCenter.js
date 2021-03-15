/*
1791. Find Center of Star Graph
There is an undirected star graph consisting of n nodes
 labeled from 1 to n. A star graph is a graph where there is
 one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each
edges[i] = [ui, vi] indicates that there is an edge
between the nodes ui and vi. Return the center of the given star graph.

Example 1:

Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is
connected to every other node, so 2 is the center.
Example 2:

Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1

Constraints:

3 <= n <= 105
edges.length == n - 1
edges[i].length == 2
1 <= ui, vi <= n
ui != vi
The given edges represent a valid star graph.
*/

/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  const hash = {};
  const n = edges.length;
  for (let i = 0; i < n; i += 1) {
    const u = edges[i][0];
    const v = edges[i][1];
    hash[u] = hash[u] ? hash[u] += 1 : hash[u] = 1;
    hash[v] = hash[v] ? hash[v] += 1 : hash[v] = 1;
    if (hash[v] >= n - 1) return v;
    if (hash[u] >= n - 1) return u;
  }
  return null;
}

(function () {
  console.log(findCenter([[1, 2], [2, 3], [4, 2]]), 'expecting 2');
  console.log(findCenter([[1, 2], [5, 1], [1, 3], [1, 4]]), 'expecting 1');
}());
