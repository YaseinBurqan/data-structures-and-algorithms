"use strict";

let breadthFirst = (tree) => {
  let breadthFirstArr = [];

  breadthFirstArr.push(tree.root.value);
  let traverse = (node) => {
    breadthFirstArr.push(node.left.value);
    breadthFirstArr.push(node.right.value);
    if (node.left.left) traverse(node.left);
    if (node.right.right) traverse(node.right);
  };

  traverse(tree.root);

  return breadthFirstArr;
};

module.exports = breadthFirst;

