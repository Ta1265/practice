/*
617. Merge Two Binary Trees
You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

Example 1:

Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]
Example 2:

Input: root1 = [1], root2 = [1,2]
Output: [2,2]

Constraints:

The number of nodes in both trees is in the range [0, 2000].
-104 <= Node.val <= 104
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// interface TreeNode {
//   val: number | null;
//   left: TreeNode | null;
//   right: TreeNode | null;
// }

class TreeNode {
  constructor(
    public val: number | null | undefined,
    public left: TreeNode | null | undefined,
    public right: TreeNode | null | undefined,
  ) {}
}

function buildTree2(vals:Array<number>): TreeNode {
  const nodes = vals.map((val) => (val === null ? null : new TreeNode(val, null, null)));
  nodes.forEach((node, index) => {
    if (node === null) return;
    node.left = nodes[(index * 2) + 1];
    node.right = nodes[(index * 2) + 2];
  });
  return nodes[0];
}

function mergeTrees(root1: TreeNode, root2: TreeNode): TreeNode {
  if (!root1 || root1 === null) return root2;
  if (!root2 || root2 === null) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
  // const levelOrder = (node: TreeNode): Array<number> => {
  //   const nodeStack = [node];
  //   const valStack = [node.val];
  //   let i = 0;
  //   while (i < nodeStack.length) {
  //     if (nodeStack[i].left) {
  //       nodeStack.push(nodeStack[i].left);
  //       valStack.push(nodeStack[i].left.val);
  //     } else {
  //       valStack.push(null);
  //     }
  //     if (nodeStack[i].right) {
  //       nodeStack.push(nodeStack[i].right)
  //       valStack.push(nodeStack[i].right.val);
  //     } else {
  //       valStack.push(null);
  //     }
  //     i++;
  //   }
  //   return valStack;
  // }
  // const list1 = levelOrder(root1);
  // const list2 = levelOrder(root2);
  // const ansList = []
  // for (let i = 0; i < list1.length || i < list2.length; i++) {
  //   let value = null;
  //   if (list1[i]) value = list1[i];
  //   if(list2[i]) value = value === null ? list2[i] : value + list2[i];
  //   ansList.push(value);
  // }
  // const nodesList = ansList.map((val) => val === null ? null : new TreeNode(val, null, null))
  // nodesList.forEach((node, index) => {
  //   if (node !== null) {
  //     node.left = nodesList[(index*2) + 1];
  //     node.right = nodesList[(index*2)+ 2];
  //   }
  // });
  // return nodesList[0];
}

(function () {
  const tree1 = new BinaryTree([1, 3, 2, 5]);
  const tree2 = new BinaryTree([2, 1, 3, null, 4, null, 7]);
  console.log(mergeTrees(tree1.root, tree2.root));
}());
