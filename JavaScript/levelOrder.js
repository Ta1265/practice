/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

var levelOrder = function (root) {
  const answer = [];

  const recurse = (nodes) => {
    if (nodes.length < 1) return;

    const nextNodes = [];
    const levelVals = [];

    nodes.forEach((node) => {
      if (node === null) return;
      if (node.left) nextNodes.push(node.left);
      if (node.right) nextNodes.push(node.right);
      levelVals.push(node.val);
    });
    answer.push(levelVals);

    recurse(nextNodes);
  }
  
  const nodes = [];
  nodes.push(root);
  recurse(nodes);
  return answer;

}


function tester() {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.left.left = new TreeNode(8);
  root.left.right = new TreeNode(7);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  console.log(levelOrder(root));

};
tester();
