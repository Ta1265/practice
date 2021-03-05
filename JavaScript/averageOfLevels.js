/*
 Average of Levels in Binary Tree
Given a non-empty binary tree, return the average value
 of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,
 on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function buildTree(vals) {
  const nodes = [];
  for (let i = vals.length - 1; i >= 0; i -= 1) {
    nodes[i] = new TreeNode(
      vals[i],
      nodes[(i * 2) + 1],
      nodes[(i * 2) + 2],
    );
  }
  return nodes[0];
}

const averageOfLevels = (root) => {
  const vals = [];
  const recurse = (node, level) => {
    if (node.val === null) return;
    if (!vals[level]) vals[level] = [];
    vals[level].push(node.val);

    if (node.left) recurse(node.left, level + 1);
    if (node.right) recurse(node.right, level + 1);
  };
  recurse(root, 0);
  return vals.map((level) => level.reduce((total, current) => total + current) / level.length);
};

(function () {
  const root1 = buildTree([3, 9, 20, null, null, 15, 7]);
  const root2 = buildTree([5, 2, -3]);
  const root3 = buildTree([1, null, 1]);
  console.log(averageOfLevels(root3), 'expect [1, 1]');
  console.log(averageOfLevels(root1), 'expect [3, 14.5, 11]');
  console.log(averageOfLevels(root2), 'expect [5, -0.5]');
}());
