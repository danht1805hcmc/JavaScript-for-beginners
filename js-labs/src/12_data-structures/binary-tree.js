import { printGroup, printLog } from '../console.js';

let showPrintGroup = false,
  showPrintLog = false;

/**
 * Creates a binary search tree from an initial key list.
 *
 * @param {Array} initKeyList - The initial key list used to create the binary search tree.
 * @return {Object} - An object containing the root of the binary search tree and the insert function.
 */
function createBinarySearchTree(initKeyList) {
  let root = null;

  initKeyList?.forEach((key) => {
    root = insert(root, key);
  });

  /**
   * Inserts a new node with the given key into a binary search tree.
   *
   * @param {Object} node - The root node of the binary search tree.
   * @param {number} key - The key to be inserted.
   * @return {Object} - The updated root node of the binary search tree.
   */
  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    if (node === null) {
      return newNode;
    }

    if (key < node.key) {
      node.left = insert(node.left, key);
    } else if (key > node.key) {
      node.right = insert(node.right, key);
    }

    return node;
  }

  function findMin() {
    if (root === null) {
      return null;
    }

    let current = root;
    while (current.left !== null) {
      current = current.left;
    }

    return current.key;
  }

  function search(key, node = root) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      return search(key, node.left);
    }
    if (key > node.key) {
      return search(key, node.right);
    }
    return node;
  }

  function getHeight() {
    if (root === null) {
      console.log('Tree is empty');
      return 0;
    }

    let height = 0;
    const queue = [root];

    console.log('Starting breadth-first search');
    while (queue.length > 0) {
      printGroup(
        `Level ${height} with ${queue.length} nodes`,
        () => {
          height++;
          const levelSize = queue.length;

          for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node.left !== null) {
              queue.push(node.left);
            }

            if (node.right !== null) {
              queue.push(node.right);
            }

            printGroup(
              '',
              () => {
                // console.log('queue: ', queue);
                // console.log('node: ', node);

                printLog((showPrintLog = true), 'queue: ', queue);
                printLog((showPrintLog = true), 'node: ', node);
              },
              (showPrintGroup = true),
            );
          }
        },
        (showPrintGroup = true),
      );
    }

    console.log(`Tree height: ${height - 1}`);
    return height - 1;
  }

  return { root, insert, findMin, search, getHeight };
}

const binarySearchTree = createBinarySearchTree([10, 7, 15, 5, 9, 20, 13, 17]);
// console.log(binarySearchTree.root);
// console.log(`Min: ${binarySearchTree.findMin()}`);
// console.log(binarySearchTree.search(7));
console.log(`Height: ${binarySearchTree.getHeight()}`);
