/*
226. Invert Binary Tree

Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

*/

// Definition for a binary tree node.

class TreeNode {
  constructor(
    public val: number | null | undefined,
    public left: TreeNode | null | undefined,
    public right: TreeNode | null | undefined,
  ) {}
}

function buildTree(vals:Array<number>): TreeNode {
  const nodes = vals.map((val) => (val === null ? null : new TreeNode(val, null, null)));
  nodes.forEach((node, index) => {
    if (node === null) return;
    node.left = nodes[(index * 2) + 1];
    node.right = nodes[(index * 2) + 2];
  });
  return nodes[0];
}

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
 * @return {TreeNode}
 */
var invertTree = function (root: TreeNode): TreeNode {
  // // iterative solution
  // if (root === null) return root;
  // const queue = [root];
  // let i = 0;
  // while (i < queue.length) {
  //   const cur = queue[i];
  //   [cur.left, cur.right] = [cur.right, cur.left];
  //   cur.left && queue.push(cur.left);
  //   cur.right && queue.push(cur.right);
  //   i++;
  // }
  // return root

  // recursive
  if (!root) return root;
  if (!root.left && !root.right) return root;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

(function () {
  const tree1 = buildTree([4, 2, 7, 1, 3, 6, 9]);
  con;
}());
