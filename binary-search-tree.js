class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;
    if (current === null) {
      this.root = new Node(val);
      return this;
    }

    while (current) {
      if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        }
        else {
          current = current.right;
        }
      } 
      else if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        }
        else {
          current = current.left;
        }
      } 
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let that = this;

    function traverse(currentNode) {
      if (val < currentNode.val) {
        if (currentNode.left !== null) {
          null;
        }
        else {
          currentNode.left = new Node(val);
          return that;
        }
      }
      else if (val > currentNode.val) {
        if (currentNode.right !== null) {
          null;
        }
        else {
          currentNode.right = new Node(val);
          return that;
        }
      }

      if (currentNode.left) {
        let returnVal = traverse(currentNode.left);
        if (returnVal) return returnVal;
      }
      if (currentNode.right) {
        let returnVal = traverse(currentNode.right);
        if (returnVal) return returnVal;
      } 
    }
    
    return traverse(this.root);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }

      current = val > current.val ? current.right : current.left;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function traverse(startingNode) {
      if (startingNode.val === val) {
        return startingNode;
      }

      if (startingNode.left) {
        let returnVal = traverse(startingNode.left);
        if (returnVal) return returnVal;
      }
      if (startingNode.right) {
        let returnVal = traverse(startingNode.right);
        if (returnVal) return returnVal;
      }
    }

    return traverse(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arrOfNodes = [];

    function traverse(startingNode) {
      arrOfNodes.push(startingNode.val);
      if (startingNode.left) traverse(startingNode.left);
      if (startingNode.right) traverse(startingNode.right);
    }

    traverse(this.root);
    return arrOfNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const arrOfNodes = [];

    function traverse(startingNode) {
      if (startingNode.left) traverse(startingNode.left);
      arrOfNodes.push(startingNode.val);
      if (startingNode.right) traverse(startingNode.right);
    };

    traverse(this.root);
    return arrOfNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const arrOfNodes = [];

    function traverse(startingNode) {
      if (startingNode.left) traverse(startingNode.left);
      if (startingNode.right) traverse(startingNode.right);
      arrOfNodes.push(startingNode.val);
    }

    traverse(this.root);
    return arrOfNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
