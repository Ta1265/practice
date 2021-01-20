// Create a tree
//

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addTreeNode(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let temp = this.root;

    while (temp !== null) {
      if (temp.val > value) {
        if (temp.left === null) {
          temp.left = newNode;
          return
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return
        } else {
          temp = temp.right;
        }
      }
    }
  }

  inorder(node) {
    if (!node) node = this.root;
    node.left && this.inorder(node.left);
    console.log(node.value);
    node.right && this.inorder(node.right);
  }

  preorder(node) {
    if (!node) node = this.root;
    console.log(node.value);
    node.left && this.inorder(node.left);
    node.right && this.inorder(node.right);
  }

  postorder(node) {
    if (!node) node = this.root;
    node.left && this.inorder(node.left);
    node.right && this.inorder(node.right);
    console.log(node.value);
  }

}

const tester = () => {
  const myTree = new BinaryTree();
  myTree.addTreeNode(1);
  myTree.addTreeNode(2);
  myTree.addTreeNode(5);
  myTree.addTreeNode(3);
  myTree.inorder();


}
tester();
