/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


root = new TreeNode(1, (new TreeNode(2, new TreeNode(4), new TreeNode(5))), (new TreeNode(3)));

console.log(root);

let maxDepth = function (root) {
    //depth first search
    if (root === undefined || root === null) {
        return 0;
    }
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    console.log(leftDepth);
    console.log(rightDepth);
    if (leftDepth > rightDepth) {
        let retval = 1 + leftDepth;
        console.log(" left is greater returing", retval, "from node", root.val)

        return retval;
    } else {
        let retval = 1 + rightDepth;
        console.log("right is greator or equal returing", retval, "from node", root.val)
        return retval;
    }
}

console.log(maxDepth(root));
