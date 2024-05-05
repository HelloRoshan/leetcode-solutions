/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let treeArray = [];
    let currentPath = `${root.val}`;

    if (root.val && root.left == null && root.right == null) {
        treeArray.push(currentPath)
    }

    let addNode = (nodes) => {
        if(nodes.left == null && nodes.right == null) {
            treeArray.push(`${currentPath}->${nodes.val}`)
        } else {
            currentPath += `->${nodes.val}`
            let tempPath = currentPath
            if(nodes.left) {
                addNode(nodes.left);
            }
            if(nodes.right) {
                // reset path upto where path is common
                currentPath = tempPath
                addNode(nodes.right);
            }
        }
    };

    if(root.left) {
        addNode(root.left);
    }
    if(root.right) {
        // reset path
        currentPath = `${root.val}`;
        addNode(root.right);
    }
    return treeArray;
};