/*
1008. Construct Binary Search Tree from Preorder Traversal
Given an array of integers preorder, which represents the preorder traversal
of a BST (i.e., binary search tree), construct the tree and return its root.

It is guaranteed that there is always possible to find a
binary search tree with the given requirements for the given test cases.

A binary search tree is a binary tree where for every node,
any descendant of Node.left has a value strictly less than Node.val, and any descendant of
Node.right has a value strictly greater than Node.val.

A preorder traversal of a binary tree displays the value of the node first,
then traverses Node.left, then traverses Node.right.

Example 1:

Input: preorder = [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]
Example 2:

Input: preorder = [1,3]
Output: [1,null,3]

Constraints:

1 <= preorder.length <= 100
1 <= preorder[i] <= 108
All the values of preorder are unique.

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
 * @param {number[]} preorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function bstFromPreorder(preorder) {
  const root = new TreeNode(preorder[0]);

  const place = (node, num) => {
    if (num < node.val) {
      if (node.left === null) {
        node.left = new TreeNode(num);
      } else {
        place(node.left, num);
      }
      return;
    }
    if (num > node.val) {
      if (node.right === null) {
        node.right = new TreeNode(num);
      } else {
        place(node.right, num);
      }
    }
  };
  for (let i = 1; i < preorder.length; i += 1) {
    place(root, preorder[i]);
  }
  return root;
}

function bstPrint(node) {
  const stack = [node];
  const vals = [node.val];
  let i = 0;
  while (i < stack.length) {
    if (stack[i] !== null && (stack[i].left !== null || stack[i].right !== null)) {
      if (stack[i].left) {
        stack.push(stack[i].left);
        vals.push(stack[i].left.val);
      } else {
        stack.push(null);
        vals.push(null);
      }
      if (stack[i].right) {
        stack.push(stack[i].right);
        vals.push(stack[i].right.val);
      } else {
        stack.push(null);
        vals.push(null);
      }
    }

    i += 1;
  }
  return vals;
}

(function test() {
  console.log(bstPrint(bstFromPreorder([8, 5, 1, 7, 10, 12])), 'expecting ');
  console.log(bstPrint(bstFromPreorder([1, 3, 2])), 'expecting [1, null, 3, 2] ');
}());
