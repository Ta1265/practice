/*
Inorder Successor in BST
Given the root of a binary search tree and a node p in it,
return the in-order successor of that node in the BST.
If the given node has no in-order successor in the tree, return null.

The successor of a node p is the node with the smallest key greater than p.val.

Example 1:

Input: root = [2,1,3], p = 1
Output: 2
Explanation: 1's in-order successor node is 2.
Note that both p and the return value is of TreeNode type.
Example 2:

Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105
All Nodes will have unique values.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function buildTree(i, nodes) {
  if (i >= nodes.length) return null;
  const root = new TreeNode(nodes[i]);
  root.left = buildTree(i * 2 + 1, nodes);
  root.right = buildTree(i * 2 + 2, nodes);
  return root;
}

function inorderSuccessor(root, p) {
  // const que = [];
  // function inorder(temp) {
  //   if (temp.left) inorder(temp.left);
  //   que.push(temp.val);
  //   if (temp.right) inorder(temp.right);
  // }
  // inorder(root);
  // for (let i = 0; i < que.length; i += 1) {
  //   if (que[i] === p) return i + 1 < que.length ? que[i + 1] : null;
  // }
  const stack = [];
  let cur = root;
  let found = false;
  while (cur || stack.length > 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (found) return cur;
    if (cur === p) found = true;
    cur = cur.right;
  }
  return null;
}

(function () {
  // p is an actual node in the leetcode test, and is why the tests here dont pass
  const root = buildTree(0, [2, 1, 3], 1);
  console.log(inorderSuccessor(root, 1));
  console.log(inorderSuccessor(buildTree(0, [5, 3, 6, 2, 4, null, null, 1]), 6));
}());
