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
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    const toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (val > current.val) {
        if (current.right !== null) {
          null;
        }
        else {
          current.right = new Node(val);
          return this;
        }
      }
      else if (val < current.val) {
        if (current.left !== null) {
          null;
        }
        else {
          current.left = new Node(val);
          return this;
        }
      }

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
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
    const toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();

      if (current.val === val) {
        return current;
      }

      if (current.left) toVisitStack.push(current.left);
      if (current.right) toVisitStack.push(current.right);
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

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

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
