// ? trees

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new TreeNode(val);
    if (this.root === null) {
      this.root = node;
    } else {
      this.helper(this.root, node);
    }
  }

  helper(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.helper(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.helper(node.right, newNode);
      }
    }
  }

  inOrderTransversal(node = this.root) {
    if (node == null) {
        return;
    }
    this.inOrderTransversal(node.left);
    console.log(node.val);
    this.inOrderTransversal(node.right);
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(2);
tree.insert(1);
tree.insert(7);
tree.insert(4);

tree.inOrderTransversal();
